import { Response, Request } from "express";
import createUserService from "../../services/users/createUser.service";
import updateUserService from "../../services/users/updateUser.service";
import deleteUserService from "../../services/users/deleteUser.service";
import listUserService from "../../services/users/listUserService";
import { TUserResponse } from "../../interfaces/users/users.interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response<TUserResponse>> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUserController = async (
  req: Request,
  res: Response
): Promise<Response<TUserResponse[]>> => {
  const user = await listUserService(res.locals.userId);

  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response<TUserResponse>> => {
  const userId = res.locals.userId;

  const updatedUser = await updateUserService(userId, req.body);

  return res.json(updatedUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response<void>> => {
  await deleteUserService(res.locals.userId);

  return res.status(204).send();
};

export {
  createUserController,
  updateUserController,
  deleteUserController,
  listUserController,
};
