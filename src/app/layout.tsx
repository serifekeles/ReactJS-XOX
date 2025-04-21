
import Sos from "./sos/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sos />
        <div id="root"></div>

        {children}
      </body>
    </html>
  );
}
