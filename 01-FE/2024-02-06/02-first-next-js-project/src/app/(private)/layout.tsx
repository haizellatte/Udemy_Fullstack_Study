import React from "react";
import Link from "next/link";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-sky-500 flex">
      <header>
        <Link href="/" className="px-5 text-white">
          HOME
        </Link>
        <Link href="/posts" className="px-5 text-white">
          POST
        </Link>
        <Link href="/my-page" className="px-5 text-white">
          MYPAGE
        </Link>
      </header>
      {children}
    </div>
  );
}

export default PrivateLayout;
