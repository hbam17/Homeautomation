import { SITE_CONFIG } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    areaServed: {
      "@type": "City",
      name: "Minneapolis",
      sameAs: "https://en.wikipedia.org/wiki/Minneapolis",
    },
    serviceType: [
      "Smart Home Installation",
      "Home Automation",
      "Security System Installation",
    ],
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  areaServed = "Minneapolis–St. Paul"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    description,
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedDate?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_CONFIG.url}/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      "@type": "Person",
      name: article.author || "Smart Home Installers Minneapolis",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
