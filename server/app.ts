import { Hono } from "hono";
import { cors } from "hono/cors";
import { swaggerUI } from "@hono/swagger-ui";
import { serveStatic } from "hono/bun";
import { openAPISpecs } from "hono-openapi";
import userRoutes from "./routes/user/";

const app = new Hono();

app.use(
  "*",
  cors({ origin: "*", allowMethods: ["GET", "POST", "PUT", "DELETE"] })
);

// OpenAPI spec
app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      openapi: "3.0.0",
      info: { title: "Bun Hono API", version: "1.0.0" },
      servers: [
        {
          url: `http://${Bun.env.HOST}:${Bun.env.PORT}`,
          description: Bun.env.DESCRIPTION,
        },
      ],
    },
  })
);

// Swagger UI
app.get("/ui", swaggerUI({ url: "/openapi" }));

const apiRoutes = app.basePath("/api").route("/user", userRoutes);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export type ApiRoutes = typeof apiRoutes;
export default app;
