import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata  = {
  title: "Dada's Recipes",
  description: 'Enjoy dada recipes, share love every where',

}
import { Poppins } from 'next/font/google'
 
const pop = Poppins({
  weight: ['300','400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={pop.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  )
}
