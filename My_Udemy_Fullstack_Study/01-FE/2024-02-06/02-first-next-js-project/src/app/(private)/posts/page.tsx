import Link from "next/link";

function PostPage() {
  return (
    <div>
      <h1 className="py-3 font-semibold">PostPLinkge올시다.</h1>
      <div className="flex flex-col gap-2">
        <Link href="/post1/1">post1</Link>
        <Link href="/post2/2">post2</Link>
        <Link href="/post3/3">post3</Link>
      </div>
    </div>
  );
}

export default PostPage;
