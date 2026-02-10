import { motion } from "framer-motion";
import { DecisionMarker } from "@/components/ui/DecisionMarker";

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <DecisionMarker variant="diamond" className="mb-8" />
                    <h1 className="font-stint text-5xl md:text-7xl text-gradient tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        Last Updated: February 7, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 font-sans text-gray-400 leading-relaxed max-w-2xl">
                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">1. Introduction</h2>
                        <p>
                            I, Shahriar Kabir ("I," "my," or "me"), am committed to protecting your privacy. This Privacy Policy explains how I collect, use, and safeguard your information when you visit my website, shahriar-kabir.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">2. Information We Collect</h2>
                        <p className="mb-4">
                            I may collect the following types of information:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                            <li><span className="text-white font-medium">Personal Information:</span> When you schedule a synchronization via Google Calendar or contact me, I may collect your name, email address, and any other information you provide.</li>
                            <li><span className="text-white font-medium">Usage Data:</span> I automatically collect information about how you interact with my site, including IP addresses, browser type, and pages visited.</li>
                            <li><span className="text-white font-medium">Cookies:</span> I use cookies to enhance your browsing experience and analyze site traffic.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            The information I collect is used to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                            <li>Facilitate strategic collaborations and respond to inquiries.</li>
                            <li>Improve my website's functionality and user experience.</li>
                            <li>Monitor and analyze trends in site usage.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">4. Third-Party Services</h2>
                        <p>
                            My site integrates with third-party services such as Google Calendar for scheduling and various social media platforms (LinkedIn, Twitter, YouTube, Instagram). These services have their own privacy policies, and I encourage you to review them.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">5. Data Security</h2>
                        <p>
                            I implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">6. Your Rights</h2>
                        <p>
                            Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the information I hold about you.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact me via LinkedIn or the scheduling tool on my website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
