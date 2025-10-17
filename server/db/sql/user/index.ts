import type { RtnFormatter } from "schemas/general";

let lib: { [key: string]: Function } = {};

lib.testApi = async (rtn: RtnFormatter): Promise<RtnFormatter> => {
  try {
    const result = [
      { id: 1, name: "Denies" },
      { id: 2, name: "Wong" },
      { id: 3, name: "Lim" },
    ];

    return {
      ...rtn,
      testapi: result,
      msg: "Data retrieved successfully",
    };
  } catch (error) {
    return { code: -1, msg: `Error in testApi: ${error}` };
  }
};

export default lib;
