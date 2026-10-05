import Link from "next/link"

export default function GradualPayHomePage(){
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR - GradualPay Full Platform */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b">
        <h1 className="font-bold text-2xl text-green-700">GradualPay Full Platform</h1>
        <div className="flex gap-3">
          <Link href="/login" className="border border-gray-300 px-5 py-2 rounded-lg font-medium hover:bg-gray-50">
            Login to GradualPay
          </Link>
          <Link href="/register" className="bg-green-700 text-white px-5 py-2 rounded-lg font-bold hover:bg-green-800">
            Register on GradualPay
          </Link>
        </div>
      </nav>

      {/* HERO - GradualPay Full Platform */}
      <div className="max-w-6xl mx-auto p-6 md:p-10 text-center mt-10 md:mt-20">
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
          GradualPay Full Platform - NDPR Compliant - Paystack Verified
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mt-8 leading-tight">
          Buy Phones, Laptops,<br/>MP Players Now on<br/>
          <span className="text-green-700">GradualPay Full Platform.</span><br/>
          Pay <span className="text-green-700">5% Monthly.</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          GradualPay Full Platform is a Buy Now Pay Later store for electronics.
          First time 1% fee to verify your bank account belongs to you, then flexible 5% monthly payments.
          Trusted in Port Harcourt, Rivers State.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-xl text-lg font-bold">
            Start Shopping on GradualPay Full Platform
          </Link>
          <Link href="/register" className="border-2 border-black px-8 py-4 rounded-xl text-lg font-bold">
            Create GradualPay Account
          </Link>
        </div>

        {/* FEATURES - GradualPay Full Platform */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 text-left">
          <div className="border p-6 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-lg">GradualPay Instant Approval</h3>
            <p className="text-sm text-gray-500 mt-2">Register with NIN/BVN on GradualPay Full Platform and get approved in 2 minutes.</p>
          </div>
          <div className="border p-6 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-lg">GradualPay 1% Verification</h3>
            <p className="text-sm text-gray-500 mt-2">We charge 1% first time on GradualPay to confirm account ownership via Paystack. Secure.</p>
          </div>
          <div className="border p-6 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-lg">GradualPay 5% Monthly</h3>
            <p className="text-sm text-gray-500 mt-2">Pay only 5% monthly on GradualPay Full Platform until complete. 20 months flexible.</p>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-xs text-gray-400">
          © 2026 GradualPay Full Platform - Buy Now Pay Later - Port Harcourt, Rivers State, NG
        </p>
      </div>
    </div>
  )
      }
