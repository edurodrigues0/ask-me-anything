import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "PRIMARY" | "SECONDARY" | "GHOST"
}

export function ButtonRoot({
  children,
  variant = "PRIMARY",
  className,
  ...rest
}: ButtonRootProps) {
  let variantStyles
  switch (variant) {
    case "PRIMARY":
      variantStyles = "bg-orange-400 text-orange-950 hover:bg-orange-500"
      break;
    case "SECONDARY":
      variantStyles = "bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-700"
      break;
    case "GHOST":
      variantStyles = "mt-3 text-orange-400 text-sm font-medium hover:text-orange-500"
      break;
  }
    
  return (
    <button className={
      twMerge(
        "px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors",
        variantStyles,
        className
      )}
      {...rest}
    >
      { children }
    </button>
  )
}