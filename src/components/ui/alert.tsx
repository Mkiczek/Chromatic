import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-sm border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        info: "text-informational bg-bg-informational border-informational",
        success: "text-success bg-bg-success border-success",
        warning: "text-warning bg-bg-warning border-warning",
        destructive:
          "text-destructive border-destructive bg-bg-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  onClose,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & { onClose?: () => void }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}

      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-sm p-1 hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        " col-start-2 grid justify-items-start gap-1 text-base [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

// A wrapper that manages visibility
function DismissibleAlert(props: React.ComponentProps<typeof Alert>) {
  const [open, setOpen] = React.useState(true)
  if (!open) return null

  return <Alert {...props} onClose={() => setOpen(false)} />
}

export { Alert, AlertTitle, AlertDescription, DismissibleAlert }
