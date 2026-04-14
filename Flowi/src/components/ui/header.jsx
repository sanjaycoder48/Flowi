import { Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Header({ title = "Dashboard" }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-8">
      
      {/* Title */}
      <h1 className="text-lg font-semibold text-zinc-900">
        {title}
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400" />
          <Input 
            type="search" 
            placeholder="Search workflows..." 
            className="w-64 bg-zinc-50 border-zinc-200 pl-9 focus-visible:ring-zinc-300 rounded-md h-9"
          />
        </div>

        {/* Button */}
        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-md px-4 gap-2 h-9">
          <Plus size={16} />
          New Workflow
        </Button>

      </div>
    </header>
  )
}

export default Header