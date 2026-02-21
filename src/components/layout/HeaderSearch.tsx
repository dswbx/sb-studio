import { cn } from "@/lib/utils";
import { Command, Search } from "lucide-react";

export function HeaderSearch({
   className,
   placeholder = "Search...",
   showShortcut = true,
}: {
   className?: string;
   placeholder?: string | React.ReactNode;
   showShortcut?: boolean;
}) {
   return (
      <button
         type="button"
         className={cn(
            "group",
            "flex-grow md:min-w-44 xl:min-w-56 h-[30px] rounded-md",
            "pl-1.5 md:pl-2 pr-1",
            "flex items-center justify-between",
            "bg-surface-100/75 text-foreground-lighter border",
            "hover:bg-opacity-100 hover:border-stronger",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-border-strong focus-visible:ring-offset-1 focus-visible:ring-offset-background",
            "transition",
            className
         )}
      >
         <div className="flex items-center space-x-1.5 text-foreground-lighter">
            <Search
               size={16}
               strokeWidth={1.5}
               className="group-hover:text-foreground-light transition-colors"
            />
            <p className="flex text-xs pr-2 text-foreground-muted">
               {placeholder}
            </p>
         </div>
         {showShortcut && (
            <div className="command-shortcut hidden md:flex items-center space-x-1">
               <div
                  aria-hidden="true"
                  className="md:flex items-center justify-center h-full px-1 border rounded bg-surface-300 gap-0.5"
               >
                  <Command size={12} strokeWidth={1.5} />
                  <span className="text-[12px]">K</span>
               </div>
            </div>
         )}
      </button>
   );
}
