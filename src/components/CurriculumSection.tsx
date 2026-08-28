import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/data/modules";
import { speakers } from "@/data/speakers";
import { Calendar, Clock, PenTool } from "lucide-react";

export function CurriculumSection() {
  return (
    <section className="py-20 bg-[#0B0F19]" id="curriculum">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">8-Module Curriculum Blueprint</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive masterclass designed to take you from foundational high-frequency theory to tape-out ready RF IC designs.</p>
        </div>

        <Accordion className="w-full">
          {modules.map((mod) => (
            <AccordionItem key={mod.moduleNumber} value={`module-${mod.moduleNumber}`} className="border-[#1F2937] mb-4 bg-[#111827] rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline hover:text-emerald-400 text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
                  <span className="text-emerald-500 font-mono font-bold whitespace-nowrap">Module {mod.moduleNumber}</span>
                  <span className="font-semibold text-gray-200">{mod.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pt-4 pb-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-sm bg-[#1F2937] px-3 py-1 rounded-md text-gray-300">
                    <Calendar size={14} className="text-emerald-400" />
                    {mod.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm bg-[#1F2937] px-3 py-1 rounded-md text-gray-300">
                    <Clock size={14} className="text-cyan-400" />
                    {mod.time}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Technical Topics</h4>
                    <ul className="list-disc list-inside space-y-1 ml-1">
                      {mod.technicalTopics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  {mod.fossTooling.length > 0 && (
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <PenTool size={16} className="text-emerald-400" /> FOSS Lab Tooling
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {mod.fossTooling.map((tool, i) => (
                          <Badge key={i} variant="outline" className="border-[#1F2937] text-gray-300 bg-[#0B0F19]">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-white font-medium mb-2">Instructors</h4>
                    <div className="flex flex-wrap gap-3">
                      {mod.speakerIds.map(id => {
                        const spk = speakers.find(s => s.id === id);
                        return spk ? (
                          <div key={id} className="flex items-center gap-2 bg-[#0B0F19] border border-[#1F2937] rounded-full pl-1 pr-3 py-1">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                              {spk.name.charAt(0)}
                            </div>
                            <span className="text-sm text-gray-300">{spk.name}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
