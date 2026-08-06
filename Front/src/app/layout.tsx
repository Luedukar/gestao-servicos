import { Container } from '@/components/ServerComponents/Container';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gestão de Serviços',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body><Container>{children}</Container></body>
    </html>
  );
}
