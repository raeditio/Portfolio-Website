import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { Orbitron } from 'next/font/google';
import Navbar from "./components/Navbar/Navbar";

const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata = {
  title: "Ryan Jung",
  description: "Ryan Jung's personal website",
  // image: "/profile.jpg",
  url: "https://ryankwjung.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
