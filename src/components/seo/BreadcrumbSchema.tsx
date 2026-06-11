import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/schema-markup';
export default function BreadcrumbSchema({items}:{items:{name:string;path:string}[]}) {
  return <JsonLd schema={breadcrumbSchema(items)} />;
}
