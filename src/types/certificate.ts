
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  domain: string;
  description: string;
  image?: string;
  credentialUrl?: string;
  pdfPath?: string;
  thumbnail?: string; // Added for certificate thumbnails in grid view
}
