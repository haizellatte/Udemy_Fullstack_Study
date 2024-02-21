import React from "react";
import Link from "next/link";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-500">
      <header>
        <Link href="/" className="px-5 text-white">
          HOME
        </Link>
        <Link href="/about" className="px-5 text-white">
          ABOUT
        </Link>
        <Link href="/posts" className="px-5 text-white">
          POST
        </Link>
      </header>
      {children}
    </div>
  );
}

export default PublicLayout;
