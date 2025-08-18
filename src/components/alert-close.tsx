import * as React from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { XIcon, InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ClosableAlert() {
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  return (
    <Alert
      className={cn(
        "relative pr-10 border rounded-md bg-sky-50 text-sky-800"
      )}
    >
      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        className={cn(
          "absolute top-2 right-2 rounded-sm opacity-70 transition-opacity hover:opacity-100",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        <XIcon className="h-4 w-4" />
        <span className="sr-only">Close alert</span>
      </button>

      {/* Optional icon + text */}
      <div className="flex items-start gap-2">
        <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <div>
          <AlertTitle className="font-bold">Heads up!</AlertTitle>
          <AlertDescription>This is an info alert.</AlertDescription>
        </div>
      </div>
    </Alert>
  )
}
