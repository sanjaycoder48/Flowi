import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Input } from "./components/ui/input"
import { 
  Plus, LayoutDashboard, GitMerge, FileText, 
  History, ShieldCheck, Blocks, Calendar, 
  Users, CreditCard, Clock, Search, 
  ChevronRight, Zap
} from "lucide-react"
import { Button } from "./components/ui/button"

export default function SidebarPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-dvh w-full bg-[#FAFAFA] text-zinc-900 font-sans">
        <Sidebar className="border-r border-zinc-200 bg-white">
          <SidebarHeader className="px-6 py-5 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
                <Zap size={18} />
              </div>
              <span className="text-xl font-semibold tracking-tight text-zinc-900">Flowi</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="px-4 py-4 gap-6">           
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive className="text-zinc-900 bg-zinc-100 hover:bg-zinc-100 font-medium h-9">
                      <LayoutDashboard size={18} className="mr-2" />
                      Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <GitMerge size={18} className="mr-2" />
                      Workflows
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <FileText size={18} className="mr-2" />
                      Templates
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <History size={18} className="mr-2" />
                      Run History
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <ShieldCheck size={18} className="mr-2" />
                      Audit Log
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Configure</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <Blocks size={18} className="mr-2" />
                      Integrations
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <Calendar size={18} className="mr-2" />
                      Schedules
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <Users size={18} className="mr-2" />
                      Team
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9">
                      <CreditCard size={18} className="mr-2" />
                      Billing
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 bg-[#FAFAFA] flex flex-col">
          {/* Top Header */}
          <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-8">
            <h1 className="text-lg font-semibold text-zinc-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400" />
                <Input 
                  type="search" 
                  placeholder="Search workflows..." 
                  className="w-64 bg-zinc-50 border-zinc-200 pl-9 focus-visible:ring-zinc-300 rounded-md shadow-sm h-9"
                />
              </div>
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md px-4 gap-2 shadow-sm h-9">
                <Plus size={16} />
                New Workflow
              </Button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-8 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Active Workflows", value: "12", subtext: "+2 this week" },
                  { label: "Total Runs", value: "1,284", subtext: "84 in last 24h" },
                  { label: "Success Rate", value: "99.8%", subtext: "0.2% error rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-1 transition-all hover:shadow-md">
                    <span className="text-sm font-medium text-zinc-500">{stat.label}</span>
                    <div className="text-3xl font-bold text-zinc-900 mt-1">{stat.value}</div>
                    <span className="text-xs text-zinc-400 mt-1 font-medium">{stat.subtext}</span>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                  <h2 className="text-base font-semibold text-zinc-900">Recent Workflows</h2>
                  <Button variant="outline" size="sm" className="text-zinc-600 h-8 text-xs font-medium border-zinc-200">View All</Button>
                </div>
                <div className="divide-y divide-zinc-100">
                  {[
                    { name: "Daily Data Sync", status: "Success", time: "10 mins ago", icon: <GitMerge size={16}/> },
                    { name: "User Onboarding Email", status: "Running", time: "Just now", icon: <Users size={16}/> },
                    { name: "Weekly Report Gen", status: "Success", time: "2 hours ago", icon: <FileText size={16}/> },
                    { name: "Payment Processing", status: "Failed", time: "5 hours ago", icon: <CreditCard size={16}/> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 hover:bg-zinc-50/80 transition-colors group cursor-pointer">
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
                        <div className={`text-xs px-2.5 py-1 rounded-md font-medium tracking-wide ${
                          item.status === 'Success' ? 'bg-zinc-100 text-zinc-700' :
                          item.status === 'Running' ? 'bg-zinc-900 text-white animate-pulse' :
                          'bg-zinc-100 text-zinc-500 line-through decoration-zinc-400'
                        }`}>
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
