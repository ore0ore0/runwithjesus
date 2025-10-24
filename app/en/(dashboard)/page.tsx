import GestaltGrid from '../../../components/GestaltGrid';
export default async function Home(){
  return (
    <GestaltGrid>
      <a href="/en/events" className="block rounded-2xl border p-6 focus:outline-none focus:ring-2">Group Events</a>
      <a href="/en/solo-runs" className="block rounded-2xl border p-6 focus:outline-none focus:ring-2">Solo Runs</a>
    </GestaltGrid>
  );
}
