'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4">
      <Link href="/" className="font-semibold text-blue-600">Home</Link>
      <Link href="/chat" className="text-gray-700 hover:text-blue-500">Chat</Link>
      <Link href="/mood" className="text-gray-700 hover:text-blue-500">Mood Check</Link>
    </nav>
  );
}
