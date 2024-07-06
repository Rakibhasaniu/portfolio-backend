import { TCertificate } from './certificate.interface';
import { Certificate } from './certificate.model';

const createCertificateIntoDB = async (payload: TCertificate) => {
  const result = await Certificate.create(payload);
  return result;
};

const getAllCertificatesFromDB = async () => {
  const result = await Certificate.find();
  return result;
};

export const CertificateService = {
  createCertificateIntoDB,
  getAllCertificatesFromDB,
};
