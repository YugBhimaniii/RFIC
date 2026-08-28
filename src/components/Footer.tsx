export function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-[#1F2937] py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-400 text-sm flex flex-col gap-4">
        <div className="flex justify-center gap-6 opacity-75 font-semibold text-gray-300">
          <span>IEEE</span>
          <span>IEEE Bangalore Section</span>
          <span>IEEE MSRIT</span>
          <span>IEEE Sensors Council</span>
        </div>
        <p>© {new Date().getFullYear()} IEEE Sensors Council (RIT-B Chapter & IEEE Bangalore Section). All Rights Reserved.</p>
        <p className="text-xs text-gray-500">
          Open-Source Toolchain • IHP SG13G2 PDK • Micro-Specialization Series
        </p>
      </div>
    </footer>
  );
}
