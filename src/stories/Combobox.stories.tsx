import type { Meta, StoryObj } from "@storybook/react"
import { ComboboxDemo } from "@/components/ui/combobox"
import { ComboboxForm } from "@/components/combo-form"
import { ComboBoxResponsive } from "@/components/combo-responsive"
import { ComboboxPopover } from "@/components/combo-popover"
import { ComboboxDropdownMenu } from "@/components/combo-dropdown"

const meta: Meta = {
  title: "Components/Combobox",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta

export const Basic: StoryObj = {
  name: "Basic Combobox",
  render: () => <ComboboxDemo />,
}

export const WithForm: StoryObj = {
  name: "Combobox in Form",
  render: () => <ComboboxForm />,
}



export const WithPopover: StoryObj = {
  name: "Combobox with Popover",
  render: () => <ComboboxPopover />,
}

export const WithDropdownMenu: StoryObj = {
  name: "Combobox with DropdownMenu",
  render: () => <ComboboxDropdownMenu />,
}
