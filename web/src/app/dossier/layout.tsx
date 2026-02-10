import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dossier | Shahriar Kabir",
    description: "Personal mission record, core focus areas, and strategic operational philosophy.",
    openGraph: {
        title: "Dossier | Shahriar Kabir",
        description: "Personal mission record, core focus areas, and strategic operational philosophy.",
        type: "profile",
    }
};

export default function DossierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
