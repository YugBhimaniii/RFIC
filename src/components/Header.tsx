import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F2937] bg-[#0B0F19]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-4 items-center">
          <div className="text-white font-bold tracking-tight text-xl">IEEE RF IC Series</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <Link href="#overview" className="hover:text-emerald-400 transition-colors">Overview</Link>
          <Link href="#toolchain" className="hover:text-cyan-400 transition-colors">Toolchain</Link>
          <Link href="#curriculum" className="hover:text-indigo-400 transition-colors">Curriculum</Link>
          <Link href="#speakers" className="hover:text-emerald-400 transition-colors">Speakers</Link>
          <Link href="#schedule" className="hover:text-cyan-400 transition-colors">Schedule</Link>
        </nav>
        <div>
          <Link href="#register" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}
