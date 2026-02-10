export function SchemaData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shahriar Kabir",
        "jobTitle": "Process Architect & Operations Leader",
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
            "description": "Leading team of 55+ in AI Voice Agent operations and process architecture."
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
        "description": "Process Architect and Director of Operations based in Dhaka, specializing in building and operating global teams at scale.",
        "image": "https://shahriar-kabir.com/images/shahriar-profile.jpg",
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
        "url": "https://primesync.ai"
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Shahriar Kabir",
        "url": "https://shahriar-kabir.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://shahriar-kabir.com/thinking?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Insights",
                "item": "https://shahriar-kabir.com/thinking"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Career",
                "item": "https://shahriar-kabir.com/career"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Dossier",
                "item": "https://shahriar-kabir.com/dossier"
            }
        ]
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
