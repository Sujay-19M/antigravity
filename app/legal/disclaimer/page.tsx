import { TLDRSection } from "@/components/legal/TLDRSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Antigravity",
    description: "Limitations of liability and warranties for the Antigravity platform.",
};

export default function DisclaimerPage() {
    return (
        <>
            <h1 className="text-4xl font-display font-bold text-white mb-8">Disclaimer</h1>

            <TLDRSection type="warning">
                <strong>TL;DR:</strong> The software is provided &quot;as is&quot;. We strive for 99.9% uptime, but we are not liable for incidental damages if the internet breaks.
            </TLDRSection>

            <section className="space-y-6 text-silver/80">
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. No Warranties</h2>
                <p>
                    The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Antigravity expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Limitation of Liability</h2>
                <p>
                    In no event shall Antigravity, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
            </section>
        </>
    );
}
