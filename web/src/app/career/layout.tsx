import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career | Shahriar Kabir",
    description: "A comprehensive chronological record of high-stakes operational leadership, system architecture, and process design across global organizations.",
    openGraph: {
        title: "Career | Shahriar Kabir",
        description: "A comprehensive chronological record of high-stakes operational leadership, system architecture, and process design across global organizations.",
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
