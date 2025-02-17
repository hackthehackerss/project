import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';

export interface CertificateData {
  userName: string;
  courseName: string;
  completionDate: Date;
  certificateId: string;
}

export const generateCertificate = async (data: CertificateData): Promise<Blob> => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  // Set background color
  doc.setFillColor(15, 23, 42); // bg-background
  doc.rect(0, 0, 297, 210, 'F');

  // Add decorative border
  doc.setDrawColor(0, 240, 255); // primary-blue
  doc.setLineWidth(1);
  doc.rect(10, 10, 277, 190);

  // Add decorative corners
  const cornerSize = 20;
  doc.setLineWidth(2);
  // Top left
  doc.line(10, 10, 10 + cornerSize, 10);
  doc.line(10, 10, 10, 10 + cornerSize);
  // Top right
  doc.line(287 - cornerSize, 10, 287, 10);
  doc.line(287, 10, 287, 10 + cornerSize);
  // Bottom left
  doc.line(10, 200 - cornerSize, 10, 200);
  doc.line(10, 200, 10 + cornerSize, 200);
  // Bottom right
  doc.line(287 - cornerSize, 200, 287, 200);
  doc.line(287, 200 - cornerSize, 287, 200);

  // Add logo
  const logoWidth = 30;
  const logoHeight = 30;
  const logoX = (297 - logoWidth) / 2;
  doc.addImage('/logo-shield.png', 'PNG', logoX, 20, logoWidth, logoHeight);

  // Add decorative line under logo
  doc.setDrawColor(0, 240, 255);
  doc.setLineWidth(0.5);
  doc.line(logoX - 20, 55, logoX + logoWidth + 20, 55);

  // Set title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(40);
  doc.setFont('helvetica', 'bold');
  doc.text('Certificate of Completion', 297/2, 80, { align: 'center' });

  // Add recipient name with decorative elements
  doc.setFontSize(24);
  doc.text('This is to certify that', 297/2, 100, { align: 'center' });
  doc.setFontSize(32);
  doc.setTextColor(0, 240, 255); // primary-blue
  
  // Add decorative line before name
  const nameWidth = doc.getTextWidth(data.userName);
  const nameX = (297 - nameWidth) / 2;
  doc.setLineWidth(0.5);
  doc.line(nameX - 10, 118, nameX - 5, 118);
  doc.line(nameX + nameWidth + 5, 118, nameX + nameWidth + 10, 118);
  
  doc.text(data.userName, 297/2, 120, { align: 'center' });

  // Add course details with decorative elements
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('has successfully completed', 297/2, 140, { align: 'center' });
  doc.setFontSize(28);
  doc.setTextColor(0, 240, 255); // primary-blue
  doc.text(data.courseName, 297/2, 160, { align: 'center' });

  // Add decorative line under course name
  const courseWidth = doc.getTextWidth(data.courseName);
  const courseX = (297 - courseWidth) / 2;
  doc.setLineWidth(0.5);
  doc.line(courseX - 10, 165, courseX + courseWidth + 10, 165);

  // Add date and certificate ID with icons
  doc.setTextColor(180, 180, 180);
  doc.setFontSize(12);
  const dateStr = data.completionDate.toLocaleDateString();
  doc.text(`Completion Date: ${dateStr}`, 20, 190);
  doc.text(`Certificate ID: ${data.certificateId}`, 200, 190);

  // Add verification QR code
  const qrCodeUrl = `https://hackthehackers.com/verify/${data.certificateId}`;
  const qrCodeSize = 20;
  const qrCodeDataUrl = await QRCode.toDataURL(qrCodeUrl, { width: 100, margin: 0 });
  doc.addImage(qrCodeDataUrl, 'PNG', 257, 170, qrCodeSize, qrCodeSize);

  return doc.output('blob');
};