// Alert.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

// Adjust these paths to match your project layout
import { ClosableAlert } from '@/components/alert-close'
import { Button } from "@/components/ui/button"

const meta: Meta<typeof ClosableAlert> = {
  title: "Components/Alert/Closable",
  component: ClosableAlert,
  parameters: {
    layout: "centered",
    controls: { hideNoControlsWarning: true },
  },
}
export default meta

type Story = StoryObj<typeof ClosableAlert>

/**
 * Renders your ClosableAlert exactly as implemented.
 */
export const Default: Story = {
  render: () => <ClosableAlert />,
}

/**
 * Playground: lets you re-open the alert after closing.
 * Useful in Storybook since state resets when you refresh, not when you close.
 */
export const Playground: Story = {
  render: () => {
    const [show, setShow] = React.useState(true)

    return (
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <Button onClick={() => setShow(true)}>Show alert</Button>
          <span className="text-sm text-muted-foreground">
            Close the alert with the “X”, then click “Show alert” to bring it back.
          </span>
        </div>

        {show ? (
          // Your component manages its own close; we just unmount it once it disappears.
          // If you want the "X" to also notify this wrapper, expose an onClose prop in your component.
          <ClosableAlert />
        ) : null}
      </div>
    )
  },
}
