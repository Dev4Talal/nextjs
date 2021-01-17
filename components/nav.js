import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import en from '../locales/en';
import ar from '../locales/ar';

export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ar;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <nav>
        <ul className="flex items-center justify-between space-x-8">
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">E</option>
            <option className="text-black" value="ar">ع</option>
          </select>
        </ul>
    </nav>
  );
}