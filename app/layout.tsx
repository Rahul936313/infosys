import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infosys 2027 Prep OS",
  description: "A systematic placement preparation dashboard for DSA, CS fundamentals, SQL, AI/ML, projects and interviews.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
