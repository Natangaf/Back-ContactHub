import { Response, Request } from "express";
import createContactService from "../../services/contacts/createContact.service";
import listAllContactsService from "../../services/contacts/listAllContacts.service";
import updateContactService from "../../services/contacts/updateContact.service";
import deleteContactService from "../../services/contacts/deleteContact.service";
import { TContactResponse } from "../../interfaces/contacts/contacts.interfaces";
import { contactSchemaResponse } from "../../schemas/contacts.schema";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response<TContactResponse>> => {
  const newContact = await createContactService(req.body, res.locals.userId);
  const parsedContact = contactSchemaResponse.parse(newContact);

  return res.status(201).json(parsedContact);
};

export const listAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response<TContactResponse[]>> => {
  const contacts = await listAllContactsService(res.locals.userId);

  return res.status(200).json(contacts);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response<TContactResponse>> => {
  const contactId = req.params.id;

  const updatedContact = await updateContactService(contactId, req.body);

  return res.json(updatedContact);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response<void>> => {
  const contactId = req.params.id;

  await deleteContactService(contactId);

  return res.status(204).send();
};

