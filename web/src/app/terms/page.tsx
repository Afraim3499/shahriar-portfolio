import { DecisionMarker } from "@/components/ui/DecisionMarker";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <DecisionMarker variant="diamond" className="mb-8" />
                    <h1 className="font-stint text-5xl md:text-7xl text-gradient tracking-tight mb-6">
                        Terms of Service
                    </h1>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        Last Updated: February 7, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 font-sans text-gray-400 leading-relaxed max-w-2xl">
                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using shahriar-kabir.com ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">2. Professional Disclaimer</h2>
                        <p>
                            The content provided on this Site, including articles, insights, and strategy frameworks, is for informational purposes only. It does not constitute professional advice. Reliance on any information provided on the Site is solely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">3. Intellectual Property</h2>
                        <p>
                            All content on this Site, including but not limited to text, graphics, logos, and code, is the property of Shahriar Kabir and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">4. User Conduct</h2>
                        <p>
                            You agree to use the Site only for lawful purposes. You are prohibited from using the Site to engage in any activity that could damage, disable, or impair the Site or interfere with any other party's use of the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">5. Limitation of Liability</h2>
                        <p>
                            In no event shall Shahriar Kabir be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the Site or the information contained herein.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">6. External Links</h2>
                        <p>
                            The Site may contain links to third-party websites. These links are provided for your convenience only. I have no control over the content of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">7. Governing Law</h2>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law principles.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-stint text-2xl text-white mb-4 tracking-wide uppercase">8. Changes to Terms</h2>
                        <p>
                            I reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of changes constitutes your acceptance of such changes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
