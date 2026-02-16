
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn", // Using our new .btn base class
  {
    variants: {
      variant: {
        default: "btn--primary btn-glow", // Updated to use hero glow style by default
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "btn--secondary btn-glow-outline", // Updated to use hero outline glow style by default
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "", // Removed default size since it's handled by .btn class
        sm: "text-sm py-2 px-4 h-9", // Adjusted for smaller buttons
        lg: "text-lg px-8 py-4", // Match hero button dimensions
        icon: "h-10 w-10 !p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
