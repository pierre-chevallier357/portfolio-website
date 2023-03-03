import './globals.scss';

export const metadata = {
  title: "Pierre Chevallier's Portfolio",
  description: "Pierre Chevallier's Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
