import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.svg"
                alt="GemsCoder"
                width={200}
                height={50}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
