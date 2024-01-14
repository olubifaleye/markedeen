import '../styles/globals.css';
import ClientLayout from './clientLayout';

// Set metadata for layout file
export const metadata = {
  title: "Markedeen",
  description: "Markedeen goes beyond the realms of traditional marketing — we're your end-to-end business growth partner.",
  keywords: [
    "Markedeen",
    "Growth",
    "Partner",
    "Marketing",
    "Agency",
  ]
}

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}