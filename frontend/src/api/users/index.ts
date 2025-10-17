import { RtnFormatter } from "@schemas/general";
import type { ApiRoutes } from "@server/app";
import { hc } from "hono/client";

const API_HOST = import.meta.env.VITE_URL || "http://localhost:3000";

const client = hc<ApiRoutes>(API_HOST);
//console.log(API_HOST);
export const api = client.api;

export async function handleTestApi(): Promise<RtnFormatter> {
  const res = await api.user.testApi.$get({});
  if (!res.ok) {
    throw new Error("Server error, status code: " + res.status);
  }

  const rtn = await res.json();
  return rtn;
}
