import { LegalLayout } from "@/components/legal/LegalLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LegalLayout>{children}</LegalLayout>;
}
