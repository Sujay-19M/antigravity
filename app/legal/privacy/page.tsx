import { TLDRSection } from "@/components/legal/TLDRSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Mandarmani Havens",
    description: "Our commitment to your privacy. No tracking, no selling data.",
};

export default function PrivacyPage() {
    return (
        <>
            <h1 className="text-4xl font-display font-bold text-white mb-8">Privacy Policy</h1>

            <TLDRSection type="info">
                <strong>TL;DR:</strong> We collect only what is necessary to run the service (email, usage logs). We do not track you across the web, and we never sell your data to third parties.
            </TLDRSection>

            <section className="space-y-6 text-silver/80">
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information Collection</h2>
                <p>
                    We collect information you provide directly to us, such as when you create an account, update your profile, or request customer support.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Use of Information</h2>
                <p>
                    We strictly use your information to operate, maintain, and provide the features and functionality of the Service. We do not monetize your personal data.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Cookie Policy</h2>
                <p>
                    We use local storage and essential cookies only for authentication and security purposes. No tracking pixels. No third-party analytics that compromise your privacy.
                </p>
            </section>
        </>
    );
}
