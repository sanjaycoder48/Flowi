import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Input } from "./components/ui/input"
import {Plus} from "lucide-react"
import { Button } from "./components/ui/button"

export default function SidebarPage() {
  return (
    <SidebarProvider>
      <div className="min-h-dvh bg-background text-foreground">
        <div className="flex min-h-dvh">
          <Sidebar>
            <SidebarHeader>
              <div className="px-2 py-1 text-2xl font-semibold border-b-3 border-gray-700">Flowi</div>
            </SidebarHeader>
            {/* main section */}
            <SidebarContent>           
              <SidebarMenu>
              <div className="text-xl mb-1">Main</div> 
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-xl ml-3">Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-xl ml-3">Workflow</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-xl ml-3">AI Generator</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-xl ml-3">Run History</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-xl ml-3">Audit Log</SidebarMenuButton>
                </SidebarMenuItem>
                {/* second section */}
                <div className="text-xl mb-1">Configure</div> 
                <sidebarMenu className="flex flex-col gap-2 ml-3 ">
                <sidebarMenuItem>
                  <sidebarMenuButton className="text-xl ml-3">Integrations</sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="text-xl ml-3">Templates</sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="text-xl ml-3">Schedules</sidebarMenuButton>
                </sidebarMenuItem>
                </sidebarMenu>
                {/* third section */}
                <div className="text-xl mb-1">Account</div>
                <sidebarMenu className="flex flex-col gap-2 ml-3 "> 
                <sidebarMenuItem>
                  <sidebarMenuButton className="text-xl ml-3">Team</sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="text-xl ml-3">Billing</sidebarMenuButton>
                </sidebarMenuItem>
                <sidebarMenuItem>
                  <sidebarMenuButton className="text-xl ml-3">Schedules</sidebarMenuButton>
                </sidebarMenuItem>
                </sidebarMenu>
              </SidebarMenu>
            </SidebarContent>
            <sidebarContent>
              
            </sidebarContent>
          </Sidebar>

          <SidebarInset className="p-6 ">
            <div className="flex gap-3 items-center justify-between w-full border-4 p-2 mt-0 pl-8 ">
              <span>Dashboard</span>
              <Input type="text" placeholder="search for the task..." /> 
              <div className="flex">
                <Button className=" m-0items-center ">
                  <Plus size={22}/><span className="w-30">New Workflow</span>
                </Button>
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
