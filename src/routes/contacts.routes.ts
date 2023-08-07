/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Routes related to contacts
 */
import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contacts/contacts.controllers";
import ensureIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";
import ensureContactExistsMiddleware from "../middlewares/ensureContactExistsMiddleware";

const contactsRoutes = Router();

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Object containing data of the new contact.
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
 *               phone:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 *     responses:
 *       200:
 *         description: Success. Returns the data of the created contact.
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
 *                 phone:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 */
contactsRoutes.post(
  "/",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: List all contacts.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success. Returns a list of contacts.
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
 *                   phone:
 *                     type: string
 *                 example:
 *                   - id: 1
 *                     name: "John Doe"
 *                     email: "johndoe@example.com"
 *                     phone: "555-1234"
 *                   - id: 2
 *                     name: "Jane Smith"
 *                     email: "janesmith@example.com"
 *                     phone: "555-5678"
 */
contactsRoutes.get("", ensureAuthMiddleware, listAllContactsController);

/**
 * @swagger
 * /contacts/{id}:
 *   patch:
 *     summary: Update an existing contact.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the contact to be updated.
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       description: Object containing data of the contact to be updated.
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
 *               phone:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 *     responses:
 *       200:
 *         description: Success. Returns the data of the updated contact.
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
 *                 phone:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 */
contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete an existing contact.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the contact to be deleted.
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Success. Returns a message indicating that the contact was deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Contact deleted successfully."
 */
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  ensureIsOwnerMiddleware,
  deleteContactController
);

export { contactsRoutes };
