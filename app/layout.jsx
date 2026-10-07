import { Raleway, Inter, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CustomCursor from "@/components/motion/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Architectural Display Font (design.md Section 2)
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Editorial Body Font (design.md Section 2)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "CYBERSHIELD TECHNOLOGIES — Enterprise AI, Software Systems & Operating Collective",
  description:
    "CyberShield Technologies architects enterprise AI/ML platforms, high-scale software systems, and commands an operating collective of 6 specialized sister brands.",
  metadataBase: new URL("https://cybershield.in"),
  openGraph: {
    title: "CYBERSHIELD TECHNOLOGIES — Enterprise AI, Software Systems & Operating Collective",
    description:
      "CyberShield Technologies architects enterprise AI/ML platforms, high-scale software systems, and commands an operating collective of 6 specialized sister brands.",
    url: "https://cybershield.in",
    siteName: "CyberShield Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberShield Technologies — Enterprise AI & Technology Collective",
    description:
      "CyberShield Technologies architects enterprise AI/ML platforms, high-scale software systems, and commands an operating collective of 6 specialized sister brands.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} ${jakarta.variable} ${spaceMono.variable}`}
    >
      <body className="font-body bg-[#ece8df] text-[#0A1333] antialiased min-h-screen flex flex-col selection:bg-[#1CA3BB] selection:text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <ModalProvider>
            <CustomCursor />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
