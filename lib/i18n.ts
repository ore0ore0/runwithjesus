import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const l = (locale ?? 'en') as 'en' | 'ko';
  const messages = (await import(`../app/${l}/messages/${l}.json`)).default;
  return { locale: l, messages };
});
