import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="overview">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[128px]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-95">
            <div className="bg-white p-3 rounded-xl shadow-lg h-24 flex items-center justify-center min-w-[160px]">
              <img src="/logos/ieee-sensors-council.png" alt="IEEE Sensors Council" className="max-h-full w-auto object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl shadow-lg h-24 flex items-center justify-center min-w-[160px]">
              <img src="/logos/ieee-bangalore.png" alt="IEEE Bangalore Section" className="max-h-full w-auto object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl shadow-lg h-24 flex items-center justify-center min-w-[160px]">
              <img src="/logos/ieee-ramaiah.jpg" alt="IEEE Ramaiah" className="max-h-full w-auto object-contain" />
            </div>
          </div>
        </div>

        <Badge variant="outline" className="mb-6 border-emerald-500/50 text-emerald-400 bg-emerald-500/10 px-4 py-1.5 text-sm">
          IEEE Bangalore Section Flagship Micro-Specialization Track
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">RF IC Design</span> for 5G/6G on Open-Source Silicon
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          An 8-Module Masterclass bridging high-frequency architectural theory, FOSS EDA pipelines, and open-source MPW shuttle tape-outs with the IHP SG13G2 130nm SiGe BiCMOS PDK.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="secondary" className="bg-[#111827] text-gray-300 hover:bg-[#1F2937] px-4 py-2 text-sm font-medium border border-[#1F2937]">
            4 Weeks • 8 Modules
          </Badge>
          <Badge variant="secondary" className="bg-[#111827] text-gray-300 hover:bg-[#1F2937] px-4 py-2 text-sm font-medium border border-[#1F2937]">
            Zero-Cost FOSS Toolchain
          </Badge>
          <Badge variant="secondary" className="bg-[#111827] text-gray-300 hover:bg-[#1F2937] px-4 py-2 text-sm font-medium border border-[#1F2937]">
            IHP SG13G2 PDK
          </Badge>
          <Badge variant="secondary" className="bg-[#111827] text-gray-300 hover:bg-[#1F2937] px-4 py-2 text-sm font-medium border border-[#1F2937]">
            IEEE Certification
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#register">
            <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Register for Free
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
            Download Syllabus
          </Button>
        </div>
      </div>
    </section>
  );
}
