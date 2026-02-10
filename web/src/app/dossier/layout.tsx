import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dossier | Shahriar Kabir",
    description: "Explore the personal mission record, core focus areas, and strategic operational philosophy of Shahriar Kabir, Director of Operations & Process Architect.",
    openGraph: {
        title: "Dossier | Shahriar Kabir",
        description: "Explore the personal mission record, core focus areas, and strategic operational philosophy of Shahriar Kabir, Director of Operations & Process Architect.",
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
