import type { RtnFormatter } from "schemas/general";
import sql from "@/db/sql/user";
import * as _ from "lodash";

let lib: { [key: string]: Function } = {};

lib.testApi = async (rtn: RtnFormatter): Promise<RtnFormatter> => {
  try {
    if (rtn.code === 0) {
      rtn = await sql.testApi(rtn);
    }

    return rtn;
  } catch (error) {
    return {
      code: -1,
      msg: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export default lib;
