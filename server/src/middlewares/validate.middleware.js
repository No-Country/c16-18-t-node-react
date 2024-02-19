import {validationResult} from "express-validator";

export const validateChecks = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ status: "error", payload: errors.array() });
  };
};

