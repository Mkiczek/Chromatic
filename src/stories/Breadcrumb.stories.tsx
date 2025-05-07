import type { Meta, StoryObj } from '@storybook/react';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger } from '@/components/ui/dropdown-menu.tsx';
import { Button } from '@/components/ui/button';

const meta: Meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
  };
  
  export default meta;
  
  type Story = StoryObj<typeof Breadcrumb>;
  
  export const Default: Story = {
    render: () => (
      <div className="p-6">
        <Breadcrumb>
          {/* Breadcrumb navigation structure */}
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/policies">Policies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage><strong>Policy #12345</strong></BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    ),
  };