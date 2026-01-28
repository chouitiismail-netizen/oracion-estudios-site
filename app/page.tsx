import HomeClient from '../components/HomeClient';
import JsonLd from '../components/JsonLd';
import { getSpiritualPages } from '../lib/content';
import { generateHomePageSchema } from '../lib/seo';

export default function HomePage() {
  const allPages = getSpiritualPages();

  return (
    <>
      <JsonLd data={generateHomePageSchema()} />
      <HomeClient allPages={allPages} />
    </>
  );
}
