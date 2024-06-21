import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between px-10 py-5 bg-slate-300">
        <Link href="/" className="text-2xl font-medium text-black">
          Dbimbing Cafe
        </Link>

        <Link
          href="/create"
          className="px-3 py-1 font-semibold text-black border rounded border-slate-600 hover:bg-slate-400"
        >
          Create Food
        </Link>
      </nav>
    </div>
  );
}
