import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-gray-800 py-12">
            <div className="container mx-auto px-4 md:px-6">
                {/* White content container */}
                <div className="bg-white rounded-lg p-8 md:p-12">
                    {/* Top section: Logo/Tagline and Navigation */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        {/* Left: Logo and Tagline */}
                        <div className="space-y-3">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/assets/incha-logo.png"
                                    alt="Inchaa Logo"
                                    width={126}
                                    height={24}
                                    className="h-6 w-auto"
                                />
                            </Link>
                            <p className="text-gray-500 text-sm font-sans">
                                Built for Builders. Trusted by Professionals.
                            </p>
                        </div>

                        {/* Right: Horizontal Navigation */}
                        <nav className="flex flex-wrap gap-6 text-sm text-gray-500 font-sans">
                            <Link href="/" className="hover:text-gray-700 transition-colors">
                                Home
                            </Link>
                            <Link href="#" className="hover:text-gray-700 transition-colors">
                                Terms
                            </Link>
                            <Link href="#" className="hover:text-gray-700 transition-colors">
                                Privacy
                            </Link>
                            <Link href="#" className="hover:text-gray-700 transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Bottom: Copyright */}
                    <div className="border-t border-gray-100 pt-8">
                        <p className="text-center text-gray-500 text-sm font-sans">
                            © {new Date().getFullYear()} Inchaa Technologies. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
