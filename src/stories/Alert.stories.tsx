import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const InfoAlert: Story = {
  render: () => (
    <Alert variant='info'>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is an info alert.</AlertDescription>
    </Alert>
  ),
};

export const SuccessAlert: Story = {
  render: () => (
    <Alert>
      <CheckCircle className="h-4 w-4 text-green-600" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>Your operation was completed successfully.</AlertDescription>
    </Alert>
  ),
};

export const WarningAlert: Story = {
  render: () => (
    <Alert>
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertTitle>Warning!</AlertTitle>
      <AlertDescription>You should double-check your settings.</AlertDescription>
    </Alert>
  ),
};

export const ErrorAlert: Story = {
  render: () => (
    <Alert variant='destructive'>
      <XCircle className="h-4 w-4 text-red-600" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong.</AlertDescription>
    </Alert>
  ),
};
