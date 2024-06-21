import Link from "next/link";

export default function BaseLayout({ children }) {
  return (
    <div>
      <nav className="flex justify-around bg-slate-400">
        <Link href="/">
          <h1 className="text-xl font-bold uppercase">Logo</h1>
        </Link>
        <Link href="/create">
          <h1 className="text-xl font-bold uppercase border rounded-md">
            Create Food
          </h1>
        </Link>
      </nav>
      {/* <div className="h-screen min-h-screen p-8 bg-gray-500">{children}</div> */}
    </div>
  );
}
