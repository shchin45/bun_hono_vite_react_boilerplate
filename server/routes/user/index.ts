import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import type { RtnFormatter } from "schemas/general";
import lib from "@/controller/user";

const app = new Hono().get(
  "/testApi",
  describeRoute({
    description: "Test Api",
    tags: ["User"],
    responses: {
      200: {
        description: "API tested successfully",
      },
      400: {
        description: "Invalid input or bad request",
      },
      500: {
        description: "Internal server error",
      },
    },
  }),
  async (c) => {
    try {
      let rtn: RtnFormatter = {
        code: 0,
        msg: "",
      };

      rtn = await lib.testApi(rtn);

      c.status(rtn.code === 0 ? 200 : 400);
      return c.json(rtn);
    } catch (error) {
      c.status(500);
      return c.json({
        code: -1,
        msg: error instanceof Error ? error.message : "Unknown server error",
      });
    }
  }
);

export default app;
export type User = typeof app;
