"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TemporaryRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage with learn flow
    router.replace('/?flow=learn');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Information</h2>
        <p className="text-gray-600">Sarah will tell you about temporary stays...</p>
      </div>
    </div>
  );
}