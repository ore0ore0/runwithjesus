import GestaltGrid from '../../../components/GestaltGrid';
export default async function Home(){
  return (
    <GestaltGrid>
      <a href="/ko/events" className="block rounded-2xl border p-6 focus:outline-none focus:ring-2">그룹 러닝</a>
      <a href="/ko/solo-runs" className="block rounded-2xl border p-6 focus:outline-none focus:ring-2">솔로 러닝</a>
    </GestaltGrid>
  );
}
