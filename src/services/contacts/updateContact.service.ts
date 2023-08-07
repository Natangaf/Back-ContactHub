import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactResponse } from "../../interfaces/contacts/contacts.interfaces";

const updateContactService = async (
  contactId: string,
  data: any
): Promise<Contact[] | void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const oldContact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (!oldContact) {
    return;
  }

  const newContact = contactRepository.create({
    ...oldContact,
    ...data,
  });

  await contactRepository.save(newContact);

  return newContact;
};

export default updateContactService;
