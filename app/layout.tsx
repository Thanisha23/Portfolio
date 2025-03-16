import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from './components/SideBar'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Thanisha's Portfolio" ,
  description: 'Thanisha\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html className='dark' lang="en">
      <body className={`${inter.className}`}>
      <Toaster />
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <SideBar />
        {children}
        
        </ThemeProvider>
        </body>
     
    </html>
  )
}
