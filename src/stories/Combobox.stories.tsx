// combobox.stories.tsx
import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { MyCombobox } from "@/components/ui/combobox" // ⬅️ adjust import path as needed
import { ComboboxForm } from "@/components/combo-form"
import { ComboboxPopover } from "@/components/combo-popover"
import { ComboboxDropdownMenu } from "@/components/combo-dropdown"


// Shared demo options (controls will let you edit these at runtime)
const defaultItems = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
]

const meta: Meta<typeof MyCombobox> = {
  title: "Components/Combobox",
  component: MyCombobox, // enables arg inference & Controls
  tags: ["autodocs"],
  parameters: {
    // Render in Canvas iframe on Docs (fixes Radix popover issues)
    docs: { inlineStories: false },
    // Remove centered wrapper that can clip popovers
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="relative isolate min-h-[360px] p-8" style={{ overflow: "visible" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    items: defaultItems,
    placeholder: "Select a framework",
    disabled: false,
  },
  argTypes: {
    items: {
      control: "object",
      description: "List of options { value, label }[]",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta

type Story = StoryObj<typeof MyCombobox>

/** MyCombobox — fully controlled with args & local state */
export const MyComboboxControlled: Story = {
  name: "MyCombobox (Controlled)",
  // You can also expose `open` as a boolean control if your component supports it.
  // argTypes: { open: { control: "boolean" } },
  render: (args) => {
    const [value, setValue] = React.useState<string | null>(null)
    const [open, setOpen] = React.useState(false)

    return (
      <MyCombobox
        {...args}
        value={value}
        onChange={setValue}       // If your prop is onValueChange, rename here.
        open={open}
        onOpenChange={setOpen}
      />
    )
  },
}

/** ComboboxForm — demo variant; uses the same Controls for items/placeholder/disabled if supported */
export const ComboboxInForm: Story = {
  name: "Combobox in Form",
  parameters: {
    // Keep the same doc/canvas behavior
    docs: { inlineStories: false },
  },
  render: (args) => {
    // If your ComboboxForm accepts these props, they’ll flow through.
    // If it doesn’t, just remove the spread and render <ComboboxForm />.
    return <ComboboxForm {...(args as any)} />
  },
}

/** ComboboxPopover — demo variant */
export const ComboboxWithPopover: Story = {
  name: "Combobox with Popover",
  render: (args) => {
    return <ComboboxPopover {...(args as any)} />
  },
}

/** ComboboxDropdownMenu — demo variant */
export const ComboboxWithDropdownMenu: Story = {
  name: "Combobox with Dropdown Menu",
  render: (args) => {
    return <ComboboxDropdownMenu {...(args as any)} />
  },
}
