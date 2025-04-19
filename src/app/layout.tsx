import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "@/styles/globals.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import NoteProvider from "@/Providers/NoteProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import  AppSidebar  from "@/components/AppSidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* A hydration error in React (or Next.js) occurs when the HTML rendered on the server doesn't match the HTML rendered by the client, often due to differences in data or logic between the two environments.  */}

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoteProvider>
          <SidebarProvider>
            <AppSidebar />
          <div className="flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex flex-1 flex-col px-4 pt-10 xl:px-">{children}</main>
          </div>
          </SidebarProvider>
          <Toaster />
          </NoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}