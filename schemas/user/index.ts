import z from "zod";
import "zod-openapi/extend";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required").openapi({ example: "Alice" }),
  email: z
    .string()
    .email("Invalid email")
    .openapi({ example: "alice@example.com" }),
});

export type UserType = z.infer<typeof userSchema>;
