import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roving — Banking for AI Agents",
  description: "Roving gives every AI agent a real bank account, virtual cards, spending rules, global payments, and a verified financial identity. Built for the agentic economy.",
  metadataBase: new URL("https://www.roving.money"),
  openGraph: {
    title: "Roving — Banking for AI Agents",
    description: "Roving gives every AI agent a real bank account, virtual cards, spending rules, global payments, and a verified financial identity.",
    url: "https://www.roving.money",
    siteName: "Roving",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.roving.money/#organization",
      name: "Roving",
      legalName: "Calen Financial Technologies Ltd",
      url: "https://www.roving.money",
      description: "Roving is a neobank built for AI agents and the agentic economy. It provides dedicated bank accounts, virtual cards, global payments, KYA identity verification, and human-controlled approval rules for AI agents.",
      foundingLocation: "London, United Kingdom",
      address: {
        "@type": "PostalAddress",
        streetAddress: "71–75 Shelton Street",
        addressLocality: "London",
        postalCode: "WC2H 9JQ",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@roving.money",
        contactType: "customer support",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.roving.money/#product",
      name: "Roving",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Banking infrastructure for AI agents. Roving provides agent bank accounts, virtual cards with spend controls, global payments, KYA identity verification, and full audit trails for every agent transaction.",
      url: "https://www.roving.money",
      publisher: { "@id": "https://www.roving.money/#organization" },
      featureList: [
        "AI agent bank accounts",
        "Virtual cards per agent with spend limits",
        "Global payments and multi-currency support",
        "KYA — Know Your Agent identity verification",
        "Human-controlled approval rules and spending policies",
        "Full transaction audit trail",
        "REST API and sandbox environment",
        "Phoebe AI — natural language payment interface",
      ],
      audience: {
        "@type": "Audience",
        audienceType: "AI developers, agent builders, fintech companies, enterprises deploying AI agents",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Roving?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roving is a neobank designed specifically for AI agents. It gives AI agents real bank accounts, virtual cards, global payment capabilities, and a verified financial identity through KYA (Know Your Agent), with human-controlled spending rules and full audit trails.",
          },
        },
        {
          "@type": "Question",
          name: "How do I give an AI agent a bank account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roving lets you open a dedicated bank account for each AI agent via its API or dashboard. You set the spending limits, approval rules, and permitted merchants. The agent gets its own account number, wallet, and optionally a virtual card.",
          },
        },
        {
          "@type": "Question",
          name: "What is KYA — Know Your Agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KYA is Roving's identity verification process for AI agents. Before an agent can hold funds or make payments, Roving verifies who owns it, what it is designed to do, what tools it uses, what financial permissions it has, and its risk profile. This creates a trusted financial identity for the agent.",
          },
        },
        {
          "@type": "Question",
          name: "What AI frameworks does Roving support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roving works with agents built on any framework including OpenAI, Anthropic, LangChain, CrewAI, AutoGen, MCP-based tools, and custom code stacks.",
          },
        },
        {
          "@type": "Question",
          name: "How is Roving different from Stripe or other payment processors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roving is purpose-built for AI agents rather than human users or businesses. It provides dedicated per-agent accounts and cards (not shared balances), KYA identity verification for agents, owner-defined approval rules enforced before money moves, and a full execution trace for every agent transaction — not just payment status.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Satoshi-Variable.woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Sora:wght@800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full font-sans antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
