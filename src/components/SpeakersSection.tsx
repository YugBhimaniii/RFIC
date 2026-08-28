import { Card, CardContent } from "@/components/ui/card";
import { speakers } from "@/data/speakers";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export function SpeakersSection() {
  return (
    <section className="py-20 bg-[#0B0F19]" id="speakers">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Mentors & Industry Experts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Learn directly from leading experts in FOSS EDA, silicon physics, and high-frequency RF IC design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((spk) => (
            <Card key={spk.id} className="bg-[#111827] border-[#1F2937] hover:border-emerald-500/30 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#1F2937] border-2 border-[#1F2937] group-hover:border-emerald-500/50 transition-colors flex items-center justify-center text-xl font-bold text-emerald-400 overflow-hidden">
                    {spk.name.charAt(0)}
                  </div>
                  {spk.linkedInUrl && (
                    <Link href={spk.linkedInUrl} target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <LinkIcon size={20} />
                    </Link>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{spk.name}</h3>
                <p className="text-emerald-400 text-sm font-medium mb-1">{spk.roleTitle}</p>
                <p className="text-gray-400 text-sm mb-4">{spk.organization}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{spk.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
