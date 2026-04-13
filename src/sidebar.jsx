import { sidebar } from '@/components/ui/sidebar'
import { Main } from '@/components/ui/main'


export default function sidebar() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
    <div className="flex">
      <sidebar />
      <Main className="flex-1 p-6">Your page content here</Main>
    </div>
  </div>
  )
}
