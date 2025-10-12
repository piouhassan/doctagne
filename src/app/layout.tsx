import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import {Provider} from "@/lib/Provider";
import { generateSEO, generateOrganizationSchema } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = generateSEO();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="fr" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
      <Provider>
          {children}
      </Provider>
      </body>
    </html>
  );
}