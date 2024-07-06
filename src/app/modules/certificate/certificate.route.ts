import { Router } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { CertificatesController } from './certificate.controller';
import { CertificateValidation } from './certificate.validation';

const router = Router();

router.post(
  '/create-certificate',
  auth(USER_ROLE.superAdmin),
  validateRequest(CertificateValidation.certificateValidationSchema),
  CertificatesController.createCertificate,
);

router.get('/', CertificatesController.getAllCertificates);

export const CertificatesRoute = router;
