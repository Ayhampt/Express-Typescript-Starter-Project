import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod/v3";

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema._parseAsync(req.body);
      console.log("Request Body is valid");
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid Request Body",
        success: false,
        error: error,
      });
    }
  };
};
