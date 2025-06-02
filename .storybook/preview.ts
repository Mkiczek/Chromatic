import { createElement, Fragment } from "react"
import type { Preview } from '@storybook/react';
import "tailwindcss";
import '../src/index.css';

const preview = {
  parameters: {
    vite: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} satisfies Preview

export default preview