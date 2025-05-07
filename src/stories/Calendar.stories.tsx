import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const SelectableDate: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    return (
      <div className="p-4 space-y-2">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border shadow"
        />
        {selectedDate && (
          <p className="text-sm text-muted-foreground">
            Selected date: {selectedDate.toDateString()}
          </p>
        )}
      </div>
    );
  },
};
