import { EError } from "../helpers/enums/eerror.enum.js";

export const errorHandler = (error, req, res, next) => {
  switch (error.code) {
    case EError.INVALID_JSON:
      res.json({ status: "error", error: error.message });
      break;
    case EError.DATABASE_ERROR:
      res.json({ status: "error", error: error.message });
      break;
  }
};
