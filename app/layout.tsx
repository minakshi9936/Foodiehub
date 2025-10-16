import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/components/context/CartContext'; // import CartProvider

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'FoodieHub - Taste the Authentic Flavors',
  description: 'Experience culinary excellence with every bite at FoodieHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

