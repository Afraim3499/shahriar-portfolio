import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career | Shahriar Kabir",
    description: "A comprehensive chronological record of high-stakes operational leadership, system architecture, and process design across global organizations.",
    openGraph: {
        title: "Career | Shahriar Kabir",
        description: "A comprehensive chronological record of high-stakes operational leadership, system architecture, and process design across global organizations.",
        type: "website",
        images: [{
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Shahriar Kabir - Process Architect"
        }]
    }
};

export default function CareerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
