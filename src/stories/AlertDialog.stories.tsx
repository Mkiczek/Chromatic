import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

// Import your example components. Adjust paths if these live elsewhere.
import {
 AlertDialogDemo
} from "@/components/ui/alert-dialog-default"
import AlertDialogDestructive from "@/components/ui/alert-dialog-destructive";
import AlertDialogCustomizedFooter from "@/components/ui/alert-dialog-footer";
import AlertDialogCustomizedHeader from "@/components/ui/alert-dialog-header";
import AlertDialogIcon from "@/components/ui/alert-dialog-icon";
import AlertDialogInfo from "@/components/ui/alert-dialog-info";

// If any of these are named exports instead of default, switch to:
// import { AlertDialogDefault } from "./alert-dialog"; (and update usages below)

const meta: Meta = {
  title: "Components/Alert Dialog",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A collection of Alert Dialog examples aligned with shadcnui-blocks (Default, Destructive, Footer variant, Header variant, With Icon, Info). Each story mounts its respective component so your DS consumers can preview them together.",
          tags: ['autodocs'],
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => <AlertDialogDemo />,
};

export const Destructive: Story = {
  name: "Destructive",
  render: () => <AlertDialogDestructive />,
};

export const WithCustomFooter: Story = {
  name: "Custom Footer",
  render: () => <AlertDialogCustomizedFooter />,
};

export const WithCustomHeader: Story = {
  name: "Custom Header",
  render: () => <AlertDialogCustomizedHeader />,
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => <AlertDialogIcon />,
};

export const Info: Story = {
  name: "Info",
  render: () => <AlertDialogInfo />,
};

/**
 * Notes
 * - If your example components accept props (e.g., trigger labels), you can turn each
 *   story into an args-based story:
 *     export const Default: Story = { args: { triggerLabel: "Open" }, render: (args) => <AlertDialogDefault {...args} /> }
 * - If some files export named components, swap the imports accordingly.
 * - To group these in the sidebar differently, change `title` (e.g., "Patterns/Dialogs/Alert/Blocks").
 */
