import React from 'react';
export default function GestaltGrid({ children }:{children: React.ReactNode}){
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 p-4 sm:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}
