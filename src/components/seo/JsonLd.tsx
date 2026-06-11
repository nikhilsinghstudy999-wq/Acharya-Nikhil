import Script from 'next/script';
export default function JsonLd({schema}:{schema:Record<string,any>}) {
  return <Script id="jsonld" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(schema)}</Script>;
}
