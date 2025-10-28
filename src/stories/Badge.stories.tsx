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
   * Use the `informational` badge to call for less urgent information, blending
   * into the interface while still signaling minor updates or statuses.
   */
   export const Informational: Story = {
    args: {
      variant: "informational",
    },
  }
     /**
   * Use the `warning` badge to call for concerning information.
   */
     export const Warning: Story = {
      args: {
        variant: "warning",
      },
    }
  
  /**
   * Use the `error` badge to indicate errors or the need for
   * immediate attention.
   */
  export const Error: Story = {
    args: {
      variant: "error",
    },
  }
  
  /**
   * Use the `success` to notify the user that they have achieved an action or interaction.
   */
  export const Success: Story = {
    args: {
      variant: "success",
    },
  }