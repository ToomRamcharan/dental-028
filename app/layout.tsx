import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Samanvis Super Speciality Dental Clinic | Premium Dental Care in Hyderabad',
  description: 'Samanvis Super Speciality Dental Clinic offers premium dental care in Hyderabad, Telangana. Expert dentists and modern technology. Book now!',
  openGraph: { title: 'Samanvis Super Speciality Dental Clinic | Premium Dental Care', description: 'Expert dental care in Hyderabad', type: 'website', locale: 'en_IN' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
