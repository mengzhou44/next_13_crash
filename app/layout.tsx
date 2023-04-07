import './globals.css';
import { Roboto } from 'next/font/google';
import Header from './header'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const metadata = {
  title: 'Easy Express Solutions',
  description: 'Demo the use of next 13',
  keywords: 'Web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
