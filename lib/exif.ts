export async function stripExif(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  return new Blob([arrayBuffer], { type: file.type });
}
