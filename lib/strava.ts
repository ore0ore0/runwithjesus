export function clipStartEnd(points: [number, number, number?][], meters = 500) {
  const dist = (a:[number,number], b:[number,number]) => {
    const R=6371000; const toRad=(d:number)=>d*Math.PI/180;
    const dLat=toRad(b[0]-a[0]); const dLon=toRad(b[1]-a[1]);
    const lat1=toRad(a[0]); const lat2=toRad(b[0]);
    const h= Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
    return 2*R*Math.asin(Math.sqrt(h));
  };
  let i=0, j=points.length-1, acc=0;
  while(i<j){ const d=dist(points[i] as any, points[i+1] as any); if((acc+=d)>meters) break; i++; }
  acc=0; while(j>i){ const d=dist(points[j] as any, points[j-1] as any); if((acc+=d)>meters) break; j--; }
  return points.slice(i, j+1);
}
