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
import { 
  LayoutDashboard, GitMerge, FileText, 
  History, ShieldCheck, Blocks, Calendar, 
  Users, CreditCard, Zap
} from "lucide-react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function SidebarPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname

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
                    <SidebarMenuButton
                      isActive={pathname === "/"}
                      onClick={() => navigate("/")}
                      className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9"
                    >
                      <LayoutDashboard size={18} className="mr-2" />
                      Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname.startsWith("/workflows")}
                      onClick={() => navigate("/workflows")}
                      className="text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 h-9"
                    >
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
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
