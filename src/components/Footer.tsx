import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">AI Mastery</h3>
            <p className="text-sm">
              Build tools that optimize your life — don't let AI use you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-white transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-white transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-sm mb-2">
              Email:{' '}
              <a
                href="mailto:info@aimastery.example"
                className="hover:text-white transition-colors"
              >
                info@aimastery.example
              </a>
            </p>
            <p className="text-sm">
              Learn how to master AI and build tools that empower you.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} AI Mastery Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
