import type { Meta, StoryObj } from '@storybook/react';
import { TabNav, TabNavList, TabNavLink } from '@/components/ui/tab-nav';

const meta: Meta = {
    title: "Components/Tab Navigation",
    component: TabNav,
    tags: ["autodocs"],
    argTypes: {},
    parameters: {
      layout: "centered",
    },
  }
  
  export default meta
  
  export const Default: StoryObj = {
    name: "Default",
    render: () => (
        <TabNav>
        <TabNavList className="grid w-full grid-cols-2">
          <TabNavLink active href="#tab-1">Tab 1</TabNavLink>
          <TabNavLink href="#tab-2">Tab 2</TabNavLink>
        </TabNavList>
      </TabNav>
    ),
  }