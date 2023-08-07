import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactResponse } from "../../interfaces/contacts/contacts.interfaces";

const listAllContactsService = async (
  userId: string
): Promise<TContactResponse[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts: Array<TContactResponse> = await contactRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return contacts;
};

export default listAllContactsService;
