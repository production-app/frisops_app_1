import "@/styles/globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "@mantine/core/styles.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";

const theme = createTheme({
  /** Put your mantine theme override here */
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <MantineProvider theme={theme}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </MantineProvider>
    </html>
  );
}
