// RenewalAddEquipmentPrototype.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import RenewalAddEquipmentPrototype from '@/components/renewal_equipment';

const meta: Meta<typeof RenewalAddEquipmentPrototype> = {
  title: 'Renewal/Underwriting/Add Equipment',
  component: RenewalAddEquipmentPrototype,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <Story />
        </div>
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof RenewalAddEquipmentPrototype>;

/** Default: fully clickable — just press “+ Add Equipment” in the UI */
export const ClickThrough: Story = {};
