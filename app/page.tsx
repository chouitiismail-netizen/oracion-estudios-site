import HomeClient from '../components/HomeClient';
import { getSpiritualPages } from '../lib/content';

export default function HomePage() {
  const allPages = getSpiritualPages();

  return <HomeClient allPages={allPages} />;
}
