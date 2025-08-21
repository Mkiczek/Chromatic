import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@/components/ui/badge';

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
      children: {
        control: "text",
      },
    },
    args: {
      children: "Badge",
    },
    parameters: {
      layout: "centered",
    },
  } satisfies Meta<typeof Badge>
  
  export default meta
  
  type Story = StoryObj<typeof meta>
  
  /**
   * The default form of the badge.
   */
  export const Default: Story = {}
  

   /**
   * Use the `secondary` badge to call for less urgent information, blending
   * into the interface while still signaling minor updates or statuses.
   */
   export const Informational: Story = {
    args: {
      variant: "informational",
    },
  }
     /**
   * Use the `secondary` badge to call for less urgent information, blending
   * into the interface while still signaling minor updates or statuses.
   */
     export const Warning: Story = {
      args: {
        variant: "warning",
      },
    }
  
  /**
   * Use the `destructive` badge to  indicate errors, alerts, or the need for
   * immediate attention.
   */
  export const Error: Story = {
    args: {
      variant: "error",
    },
  }
  
  /**
   * Use the `outline` badge for overlaying without obscuring interface details,
   * emphasizing clarity and subtlety..
   */
  export const Success: Story = {
    args: {
      variant: "success",
    },
  }