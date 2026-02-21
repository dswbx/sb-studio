import supabaseLogo from "@/assets/supabase-logo.svg";
import { cn } from "@/lib/utils";

export const Logo = ({
   className,
   ...props
}: Omit<React.HTMLProps<HTMLImageElement>, "src">) => {
   return (
      <img
         alt="Supalite"
         className={cn("w-auto h-4.5", className)}
         {...props}
         src={supabaseLogo}
      />
   );
};
