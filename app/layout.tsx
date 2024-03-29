import './globals.scss';

export const metadata = {
  title: 'Pierre Chevallier',
  description: 'Portfolio de Pierre Chevallier',
  icons: {
    shortcut: '/favicon.png',
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
