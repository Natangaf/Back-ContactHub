import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const ensureDataUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const { email, phone } = req.body;

  if (email) {
    const userWithEmail = await AppDataSource.getRepository(User).findOne({
      where: {
        email,
      },
    });
    if (userWithEmail) {
      return res.status(404).json("Email already registered!");
    }
  }
  if (phone) {
    const userWithPhone = await AppDataSource.getRepository(User).findOne({
      where: {
        phone,
      },
    });
    if (userWithPhone) {
      return res.status(404).json("Phone already registered!");
    }
  }
  return next();
};

export default ensureDataUpdate;
