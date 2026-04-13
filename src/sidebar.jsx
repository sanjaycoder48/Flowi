import { sidebar } from '@/components/ui/sidebar'


export default function sidebar() {
  return (
      <sidebar>
        <sidebar-header>Flowi</sidebar-header>
        <sidebar-content>
          <sidebar-menu>
            <sidebar-menu-item>
              <sidebar-menu-button>
               <a href="#">
                <Home/>
                <span>Home</span>
               </a>
              </sidebar-menu-button>
            </sidebar-menu-item>
          </sidebar-menu>
        </sidebar-content>
      </sidebar>
  )
}
