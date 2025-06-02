import type { Meta, StoryObj } from "@storybook/react"

import { DatePicker} from "../components/ui/date-picker"


const meta: Meta<typeof DatePicker> = {
    title: "Components/Date Picker",
    component: DatePicker,
    parameters: {
      control: {
        type: 'boolean',
      },
    },
  }
  
  export default meta
  
  type Story = StoryObj<typeof DatePicker>
  
  export const Default: Story = {}