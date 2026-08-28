export function ScheduleSection() {
  return (
    <section className="py-20 bg-[#0B0F19]" id="schedule">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Program Schedule</h2>
        <p className="text-gray-400 mb-8">4 Weekends • Saturdays & Sundays • Starting September 5, 2026</p>
        <div className="inline-flex flex-col gap-4">
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-200">Weekend 1-4</h4>
              <p className="text-gray-400 text-sm">10:00 AM - 1:00 PM IST</p>
            </div>
            <a href="#" className="text-emerald-400 border border-emerald-400/50 hover:bg-emerald-400/10 px-4 py-2 rounded-md transition-colors text-sm font-medium">
              Add to Google Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
