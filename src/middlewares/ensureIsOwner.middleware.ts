import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const contactId = req.params.id;
  const userId = res.locals.userId;

  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
      user: {
        id: userId,
      },
    },
  });

  if (!contact) {
    return res.status(401).json({
      message: "Unauthorized request",
    });
  }

  return next();
};

export default ensureIsOwnerMiddleware;
