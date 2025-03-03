import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/images/mini-logo.png" alt="Logo" width={300}
                            height={300} className="min-w-fit w-16 h-16 md:w-16 md:h-16" />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        TK UI is a comprehensive UI library offering consistency, accessibility, and performance.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                    <a href="mailto:WEBFRONTENDTEAM@THY.COM" className="block text-foreground-accent hover:text-foreground">Email: WEBFRONTENDTEAM@THY.COM</a>
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; 2025 TK UI. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">Made with &hearts; by THY Web Frontend Team</p>
            </div>
        </footer>
    );
};

export default Footer;
