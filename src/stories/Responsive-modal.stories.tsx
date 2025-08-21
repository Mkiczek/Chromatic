import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  ResponsiveModal,
  ResponsiveModalTrigger,
  ResponsiveModalContent,
  ResponsiveModalHeader,
  ResponsiveModalFooter,
  ResponsiveModalTitle,
  ResponsiveModalDescription,
  ResponsiveModalClose,
} from "../components/ui/responsive-modal" // Adjust the path if needed

const meta: Meta<typeof ResponsiveModal> = {
  title: "Components/ResponsiveModal",
  component: ResponsiveModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof ResponsiveModal>

export const Default: Story = {
  render: () => (
    <ResponsiveModal>
      {/* Use asChild so the Button acts as the trigger element */}
      <ResponsiveModalTrigger asChild>
        <Button>Open Modal</Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Modal Title</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            This modal demonstrates a responsive dialog using Shadcn UI.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <div className="py-4">
          <p>
            This is the modal content. Add your desired content here. It is fully responsive and will adapt based on the viewport.
          </p>
        </div>
        <ResponsiveModalFooter>
          {/* Closes the modal when clicked */}
          <ResponsiveModalClose asChild>
            <Button variant="outline">Close</Button>
          </ResponsiveModalClose>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  ),
}
