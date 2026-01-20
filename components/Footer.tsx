import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            Inchaa
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The #1 platform connecting the entire construction ecosystem. Built for trust, speed, and quality.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {[
                        {
                            title: "Company",
                            links: ["About Us", "Careers", "Blog", "Press"]
                        },
                        {
                            title: "Resources",
                            links: ["Support Center", "Terms of Service", "Privacy Policy", "Sitemap"]
                        },
                        {
                            title: "Contact",
                            links: ["help@inchaa.com", "+1 (555) 123-4567"]
                        }
                    ].map((col, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="font-bold mb-6">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Inchaa Inc. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-gray-600">Privacy</a>
                        <a href="#" className="hover:text-gray-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
