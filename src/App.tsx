import { Logo } from "./components/layout/Logo";
import { LayoutHeaderDivider } from "./components/layout/LayoutHeaderDivider";
import { Button } from "./components/supabase/Button/Button";
import { Badge } from "./components/supabase/shadcn/ui/badge";
import { HelpCircle, Home, Lightbulb, Plug, Settings } from "lucide-react";
import { cn } from "./lib/utils";
import { HeaderSearch } from "./components/layout/HeaderSearch";
import {
   SidebarContent,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarProvider,
} from "./components/supabase/shadcn/ui/sidebar";
import {
   SqlEditor,
   TableEditor,
   Database,
   Auth,
   Storage,
} from "./components/supabase/icons/icons";

export default function App() {
   return (
      <>
         <header className="flex h-12 items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
               <Logo />
               <LayoutHeaderDivider />
               <span className="text-sm font-medium">Default Project</span>
               <LayoutHeaderDivider />
               <Button
                  className="rounded-full"
                  type="default"
                  icon={<Plug className="rotate-90" />}
               >
                  Connect
               </Button>
            </div>
            <div className="flex items-center gap-2">
               <Badge variant="warning">BETA</Badge>
               <HeaderSearch
                  placeholder="Search..."
                  className={cn(
                     "hidden md:flex md:min-w-32 xl:min-w-32 rounded-full bg-transparent",
                     "[&_.command-shortcut>div]:border-none",
                     "[&_.command-shortcut>div]:pr-2",
                     "[&_.command-shortcut>div]:bg-transparent",
                     "[&_.command-shortcut>div]:text-foreground-lighter"
                  )}
               />
               <Button
                  className="rounded-full p-0 group size-[32px]"
                  type="outline"
                  size="tiny"
               >
                  <HelpCircle className="size-4 text-foreground-light" />
               </Button>
               <Button
                  className="rounded-full p-0 group size-[32px]"
                  type="outline"
                  size="tiny"
               >
                  <Lightbulb className="size-4 text-foreground-light" />
               </Button>
            </div>
         </header>
         <main className="flex h-full ">
            <div className="flex flex-col border-r h-full">
               <SidebarProvider>
                  <SidebarContent className="p-2 gap-0.5">
                     <SidebarItem Icon={Home} isActive />
                     <SidebarItem Icon={TableEditor} />
                     <SidebarItem Icon={SqlEditor} />
                     <div className="h-px bg-border-default/60 my-2" />
                     <SidebarItem Icon={Database} />
                     <SidebarItem Icon={Auth} />
                     <SidebarItem Icon={Storage} />
                     <div className="h-px bg-border-default/60 my-2" />
                     <SidebarItem Icon={Settings} />
                  </SidebarContent>
               </SidebarProvider>
            </div>
            <div className="w-72 border-r">
               <div className="px-5 py-3 border-b">
                  <h3 className="text-lg font-medium">Table Editor</h3>
               </div>
            </div>
            <div className="bg-[#121212] flex flex-1 flex-col items-center justify-center">
               <span className="opacity-50">main content</span>
            </div>
         </main>
      </>
   );
}

const SidebarItem = ({ Icon, isActive }: { Icon: any; isActive?: boolean }) => (
   <SidebarMenuItem>
      <SidebarMenuButton
         className="text-sm"
         size="default"
         isActive={isActive}
         asChild
      >
         <a href="#">
            <Icon strokeWidth={1.5} />
         </a>
      </SidebarMenuButton>
   </SidebarMenuItem>
);
