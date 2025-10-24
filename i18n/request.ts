import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale, type Locale} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const rl = await requestLocale; // requestLocale can be a Promise<string | undefined>
  const isLocale = (x: any): x is Locale => (x && (locales as readonly string[]).includes(x));
  const locale: Locale = isLocale(rl) ? rl : defaultLocale;

  const messages = (await import(`../app/${locale}/messages/${locale}.json`)).default;
  return {locale, messages};
});
