export function SchemaData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shahriar Kabir",
        "jobTitle": "Systems Architect & Operations Leader",
        "url": "https://shahriar-kabir.com",
        "knowsAbout": [
            "AI Voice Agent Orchestration",
            "Workflow Restructuring",
            "High-Stakes Operational Design",
            "Global BPO Strategy"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Operations Leader",
            "occupationLocation": {
                "@type": "City",
                "name": "Global"
            },
            "description": "Leading team of 55+ in AI Voice Agent operations and systems architecture."
        },
        "sameAs": [
            "https://linkedin.com/in/kabirshahriar",
            "https://twitter.com/shahriarhisham",
            "https://youtube.com/@ToWhereNext",
            "https://instagram.com/hishamshahriar"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "PrimeSync AI"
        },
        "description": "Systems Architect and Director of Operations based in Dhaka, specializing in building and operating global teams at scale.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhaka",
            "addressCountry": "Bangladesh"
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PrimeSync AI",
        "url": "https://primesync.ai",
        "logo": "https://shahriar-kabir.com/logo.png" // Fallback logo
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </>
    );
}
