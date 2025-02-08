import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">MechHelp Garage</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 mix-blend-multiply"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Expert Auto Care at Your Service
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Professional automotive repair and maintenance services. Trust our experienced mechanics to keep your vehicle running smoothly.
          </p>
          <div className="mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive auto repair and maintenance services to keep your vehicle in top condition
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-xl font-semibold text-gray-900">Diagnostic Services</div>
              <p className="mt-2 text-gray-500">
                State-of-the-art diagnostic equipment to identify and fix issues quickly
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-xl font-semibold text-gray-900">Maintenance</div>
              <p className="mt-2 text-gray-500">
                Regular maintenance services to prevent breakdowns and extend vehicle life
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-xl font-semibold text-gray-900">Repairs</div>
              <p className="mt-2 text-gray-500">
                Expert repair services for all makes and models
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">&copy; 2024 MechHelp Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
