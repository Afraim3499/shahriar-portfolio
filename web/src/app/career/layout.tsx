import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career | Shahriar Kabir",
    description: "A chronological record of high-stakes operational leadership and system architecture.",
    openGraph: {
        title: "Career | Shahriar Kabir",
        description: "A chronological record of high-stakes operational leadership and system architecture.",
        type: "website",
    }
};

export default function CareerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
