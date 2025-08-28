// MyCombobox.stories.tsx
import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ExampleCombobox } from "@/components/ui/combobox" // ← adjust path

const meta: Meta<typeof ExampleCombobox> = {
  title: "Components/Combobox",
  component: ExampleCombobox,
  tags: ["autodocs"],
  parameters: {
    docs: { inlineStories: false },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="relative isolate min-h-[320px] p-6" style={{ overflow: "visible" }}>
        <Story />
      </div>
    ),
  ],
  // No args here since the component doesn’t take any props
  argTypes: {
    // Hide non-existent props in the Docs table just in case
    value: { table: { disable: true } },
    open: { table: { disable: true } },
  },
}
export default meta

type Story = StoryObj<typeof ExampleCombobox>

export const Playground: Story = {
  render: () => <ExampleCombobox />,
}