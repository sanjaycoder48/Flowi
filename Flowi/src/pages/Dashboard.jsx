import { GitMerge, FileText, Users, CreditCard, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" />

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Active Workflows", value: "12", subtext: "+2 this week" },
              { label: "Total Runs", value: "1,284", subtext: "84 in last 24h" },
              { label: "Success Rate", value: "99.8%", subtext: "0.2% error rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-1 transition-all hover:shadow-md"
              >
                <span className="text-sm font-medium text-zinc-500">{stat.label}</span>
                <div className="text-3xl font-bold text-zinc-900 mt-1">{stat.value}</div>
                <span className="text-xs text-zinc-400 mt-1 font-medium">{stat.subtext}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
              <h2 className="text-base font-semibold text-zinc-900">Recent Workflows</h2>
              <Button
                variant="outline"
                size="sm"
                className="text-zinc-600 h-8 text-xs font-medium border-zinc-200"
              >
                View All
              </Button>
            </div>
            <div className="divide-y divide-zinc-100">
              {[
                { name: "Daily Data Sync", status: "Success", time: "10 mins ago", icon: <GitMerge size={16} /> },
                { name: "User Onboarding Email", status: "Running", time: "Just now", icon: <Users size={16} /> },
                { name: "Weekly Report Gen", status: "Success", time: "2 hours ago", icon: <FileText size={16} /> },
                { name: "Payment Processing", status: "Failed", time: "5 hours ago", icon: <CreditCard size={16} /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 hover:bg-zinc-50/80 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-zinc-900">{item.name}</div>
                      <div className="text-sm text-zinc-500 flex items-center gap-1.5 mt-1 font-medium">
                        <Clock size={12} />
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`text-xs px-2.5 py-1 rounded-md font-medium tracking-wide ${
                        item.status === "Success"
                          ? "bg-zinc-100 text-zinc-700"
                          : item.status === "Running"
                            ? "bg-zinc-900 text-white animate-pulse"
                            : "bg-zinc-100 text-zinc-500 line-through decoration-zinc-400"
                      }`}
                    >
                      {item.status}
                    </div>
                    <ChevronRight size={16} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

