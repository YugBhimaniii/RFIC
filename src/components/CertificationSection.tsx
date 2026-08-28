import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function CertificationSection() {
  return (
    <section className="py-20 bg-[#0B0F19]" id="certification">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Tiered Certification & Capstone</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Validate your skills with official IEEE credentials ranging from participation to verifiable technical distinction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#111827] border-[#1F2937] flex flex-col h-full">
            <CardContent className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-200 mb-2">Certificate of Participation</h3>
              <p className="text-gray-400 mb-6 min-h-[3rem]">Awarded to attendees who maintain consistent attendance and engagement.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-sm">Requires ≥ 80% verified session attendance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-sm">Active participation in Q&A and community discussions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#111827] border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Micro-Specialization
            </div>
            <CardContent className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Certificate of Distinction</h3>
              <p className="text-gray-400 mb-6 min-h-[3rem]">The ultimate credential for engineers who successfully complete the hands-on capstone project.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-sm">Design and layout a functional RF building block (e.g., LNA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-sm">Pass automated DRC/LVS checks on the IHP SG13G2 PDK</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-sm">Submit via public GitHub repository with reproducible testbenches</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
