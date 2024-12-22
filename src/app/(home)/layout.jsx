'use client';

// import { MainLayout } from 'src/layouts/main';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// ----------------------------------------------------------------------

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = true;
    // const accessToken = localStorage.getItem('accessToken'); // Or use cookies if SSR required

    if (accessToken) {
      router.push('/dashboard'); // Redirect to dashboard if accessToken exists
    } else {
      router.push('/auth/jwt/sign-in'); // Redirect to signup if no accessToken
    }
  }, [router]);
  return null;
}
