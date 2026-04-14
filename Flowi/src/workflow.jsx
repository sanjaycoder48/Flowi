import Header from "./components/ui/header"

export default function Workflow() {
   return(
      <>
      <Header title="Workflows" />
      <main className="flex-1 p-8 overflow-auto">
         <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex gap-2">
               <button className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-gray-800 hover:text-white" >All</button>
               <button className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-gray-800 hover:text-white">Active</button>
               <button className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-gray-800 hover:text-white">Paused</button>
               <button className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-gray-800 hover:text-white">Error</button>
            </div>
         </div>
      </main>
      </>
      
   )
}