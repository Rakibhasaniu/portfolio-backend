import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CertificateService } from './certificate.service';

const createCertificate = catchAsync(async (req, res) => {
  const skill = req.body;
  const result = await CertificateService.createCertificateIntoDB(skill);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate created succesfully!',
    data: result,
  });
});

const getAllCertificates = catchAsync(async (req, res) => {
  const result = await CertificateService.getAllCertificatesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Certificates retrieved successfully!`,
    data: result,
  });
});

export const CertificatesController = {
  createCertificate,
  getAllCertificates,
};
