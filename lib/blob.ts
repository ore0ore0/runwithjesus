import { put } from '@vercel/blob';

export async function uploadPublic(name: string, file: File | Blob) {
  const { url } = await put(name, file, { access: 'public' });
  return url;
}
