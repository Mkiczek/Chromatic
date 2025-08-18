// Alert.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Bell, AlertCircle, CheckCircle2, AlertTriangle, AlertOctagon, XCircle } from "lucide-react"

import { Alert, AlertTitle, AlertDescription, DismissibleAlert } from '@/components/ui/alert'

type Variant = "default" | "info" | "success" | "warning" | "destructive"

type AlertArgs = {
  variant: Variant
  title: string
  description: string
  includeIcon: boolean
  dismissible: boolean
  className?: string
}

const variantIcon: Record<Variant, React.ReactNode> = {
  default: <Bell aria-hidden />,
  info: <AlertCircle aria-hidden />,
  success: <CheckCircle2 aria-hidden />,
  warning: <AlertTriangle aria-hidden />,
  destructive: <AlertOctagon aria-hidden />,
}

const renderAlert = (args: AlertArgs) => {
  const { variant, title, description, includeIcon, dismissible, className } = args
  const Content = (
    <>
      {includeIcon ? variantIcon[variant] : null}
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {description ? <AlertDescription>{description}</AlertDescription> : null}
    </>
  )
  return dismissible ? (
    <DismissibleAlert variant={variant} className={className}>
      {Content}
    </DismissibleAlert>
  ) : (
    <Alert variant={variant} className={className}>
      {Content}
    </Alert>
  )
}

const meta = {
  title: "Components/Alert",
  // 👇 Pin the base so deep links always start with "components-alert"
  id: "components-alert",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    variant: "default" as Variant,
    title: "Heads up!",
    description: "This is a general message with supporting details.",
    includeIcon: true,
    dismissible: false,
    className: "",
  },
  argTypes: {
    variant: { control: { type: "select" }, options: ["default", "info", "success", "warning", "destructive"] },
    title: { control: "text" },
    description: { control: "text" },
    includeIcon: { control: "boolean" },
    dismissible: { control: "boolean" },
    className: { control: "text" },
  },
  render: (args: AlertArgs) => renderAlert(args),
} satisfies Meta<AlertArgs>

export default meta
type Story = StoryObj<typeof meta>

// 👇 Export names define the suffixes:
// components-alert--success-alert (this is the one your link expects)
export const SuccessAlert: Story = {
  name: "Success",
  args: {
    variant: "success",
    title: "Success!",
    description: "Your changes have been saved.",
    includeIcon: true,
    dismissible: true,
  },
}

export const InfoAlert: Story = {
  name: "Info",
  args: {
    variant: "info",
    title: "FYI",
    description: "Informational alert with context users should know.",
    includeIcon: true,
    dismissible: true,
  },
}

export const DefaultAlert: Story = {
  name: "Default",
  args: {
    variant: "default",
    title: "Heads up!",
    description: "Neutral message with supporting details.",
    includeIcon: true,
    dismissible: true,
  },
}

export const WarningAlert: Story = {
  name: "Warning",
  args: {
    variant: "warning",
    title: "Careful…",
    description: "Double-check these details before proceeding.",
    includeIcon: true,
    dismissible: true,
  },
}


export const DestructiveAltIcon: Story = {
  name: "Destructive",
  render: (args) => {
    const Content = (
      <>
        <XCircle aria-hidden />
        <AlertTitle>{args.title}</AlertTitle>
        <AlertDescription>{args.description}</AlertDescription>
      </>
    )
    return args.dismissible ? (
      <DismissibleAlert variant="destructive" className={args.className}>
        {Content}
      </DismissibleAlert>
    ) : (
      <Alert variant="destructive" className={args.className}>
        {Content}
      </Alert>
    )
  },
  args: {
    title: "Critical failure",
    description: "Action required. Investigate immediately.",
    includeIcon: true, // not used here
    dismissible: true,
  },
}
