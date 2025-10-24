'use client';
import React, { useState } from 'react';

export default function Upload(){
  const [files, setFiles] = useState<FileList|null>(null);
  return (
    <form className="mx-auto max-w-md p-4 space-y-4" action="/api/uploads/photos" method="post" encType="multipart/form-data">
      <input type="file" name="photos" multiple accept="image/*" onChange={e=>setFiles(e.target.files)} className="w-full" />
      <button className="w-full rounded-lg border px-4 py-2">Upload</button>
    </form>
  );
}
