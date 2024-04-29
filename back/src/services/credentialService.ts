import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dtos/CredentialDto";
import { CredentialsModel, UserModel } from "../config/data-source";

export const createCredentialService = async (
  credentialData: CredentialDto
) => {
  const newCredential = await CredentialsModel.create(credentialData);
  const credentialResult = await CredentialsModel.save(newCredential);

  return credentialResult;
};

export const loginCredentialService = async (credentialData: CredentialDto) => {
  const credential = CredentialsModel.findOneBy({
    username: credentialData.username,
    password: credentialData.password,
  });

  return credential;
};
