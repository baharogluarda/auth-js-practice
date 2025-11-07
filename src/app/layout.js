import "../styles/global.scss";
import { roboto } from "@/helpers/fonts";

export const metadata = {
  title: "Next.js Practice",
  description: "Practicing Next.js 16 with AuthJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
