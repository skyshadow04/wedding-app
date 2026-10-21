import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christine & JR | October 23, 2026",
  description:
    "Join Christine and JR as they celebrate their wedding on October 23, 2026 at 10:00 AM.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
