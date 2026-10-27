import { parseSchema } from "@/lib/content";

// Structured data from a CMS "schema" field (JSON text) or a ready object. Renders nothing when empty.
export function JsonLd({ schema }: { schema: string | object | null | undefined }) {
  const data = typeof schema === "string" ? parseSchema(schema) : schema;
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
