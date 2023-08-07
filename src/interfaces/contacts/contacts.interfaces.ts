import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
} from "../../schemas/contacts.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactUpdate = z.infer<typeof contactSchemaUpdate>;

export { TContact, TContactRequest, TContactResponse, TContactUpdate };
