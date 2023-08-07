/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Routes related to users
 */

import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users/users.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import ensureDataUpdate from "../middlewares/ensureDataUpdate.middlewares";

const userRoutes = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user.
 *     tags: [Users]
 *     requestBody:
 *       description: Object containing data of the new user.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Success. Returns the data of the created user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 */
userRoutes.post(
  "/",
  ensureDataIsValid(userSchemaRequest),
  createUserController
);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List logged-in user.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success. Returns a list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                 example:
 *                   - id: 1
 *                     name: "John Doe"
 *                     email: "johndoe@example.com"
 *                   - id: 2
 *                     name: "Jane Smith"
 *                     email: "janesmith@example.com"
 */
userRoutes.get("/", ensureAuthMiddleware, listUserController);

/**
 * @swagger
 * /users:
 *   patch:
 *     summary: Update an existing user.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Object containing data of the user to be updated.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Success. Returns the data of the updated user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 */
userRoutes.patch(
  "/",
  ensureAuthMiddleware,
  ensureDataIsValid(userSchemaUpdate),
  ensureDataUpdate,
  updateUserController
);

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Delete an existing user.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success. Returns a message indicating that the user was deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "User deleted successfully."
 */
userRoutes.delete("/", ensureAuthMiddleware, deleteUserController);

export { userRoutes };
