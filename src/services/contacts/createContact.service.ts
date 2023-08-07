import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import { contactSchemaResponse } from "../../schemas/contacts.schema";
import { TContactResponse } from "../../interfaces/contacts/contacts.interfaces";

const createContactService = async (
  contactData: any,
  userId: string
): Promise<TContactResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new Error("Usuário não encontrado");
  }

  const contact = new Contact();
  contact.name = contactData.name;
  contact.email = contactData.email;
  contact.phone = contactData.phone;
  contact.user = findUser;

  const contactRepository = AppDataSource.getRepository(Contact);
  const savedContact = await contactRepository.save(contact);

  return contactSchemaResponse.parse(savedContact);
};

export default createContactService;
