import './globals.scss';

export const metadata = {
  title: "Pierre Chevallier's Portfolio",
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
