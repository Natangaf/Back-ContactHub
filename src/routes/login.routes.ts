/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Routes related to login
 */

import { Router } from "express";
import { createTokenController } from "../controllers/login/login.controller";

const loginRoutes = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Create an authentication token.
 *     tags: [Login]
 *     requestBody:
 *       description: Object containing user credentials.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: "user123"
 *               password: "password123"
 *     responses:
 *       200:
 *         description: Success. Returns an authentication token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *               example:
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzZXIgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.Yg-Jb_Bu1j7GtNb8G8Zqy5yT2QKwlo8W60"
 */
loginRoutes.post("/", createTokenController);

export { loginRoutes };
