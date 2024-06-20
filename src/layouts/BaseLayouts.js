import Link from "next/link";

export default function BaseLayouts({ children }) {
  return (
    <div>
      <nav className="p-4 bg-slate-500">
        <Link href="/">Home</Link>
        <Link href="/create">Create Food</Link>
      </nav>

      {children}
    </div>
  );
}
