import "./globals.css"
export const metadata = {
  title: "GradualPay Full Platform - Buy Now Pay Later",
  description: "GradualPay: Buy phones, laptops, MP players and pay 5% monthly with 1% verification"
}
export default function GradualPayRootLayout({children}:{children: React.ReactNode}){
  return <html lang="en"><body className="bg-gray-50">{children}</body></html>
    }
