import { TLDRSection } from "@/components/legal/TLDRSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Mandarmani Havens",
    description: "Read our Terms of Service. Absolute data sovereignty and user autonomy.",
};

export default function TermsPage() {
    return (
        <>
            <h1 className="text-4xl font-display font-bold text-white mb-8">Terms of Service</h1>

            <TLDRSection type="warning">
                <strong>TL;DR:</strong> You own your data. We don&apos;t sell it. By using Mandarmani Havens, you agree not to use our platform for illegal activities. We reserve the right to suspend accounts that violate these core principles.
            </TLDRSection>

            <section className="space-y-6 text-silver/80">
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using Mandarmani Havens (&quot;the Platform&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. User Autonomy & Data Ownership</h2>
                <p>
                    We believe in absolute data sovereignty. You retain full ownership of all data, code, and assets deployed through Mandarmani Havens. We claim no intellectual property rights over the material you provide to the Service.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Prohibited Use</h2>
                <p>
                    You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).
                </p>
            </section>
        </>
    );
}
