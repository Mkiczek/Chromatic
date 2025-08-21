import { createElement, Fragment } from "react"
import type { Preview } from '@storybook/react-vite';
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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
} satisfies Preview

export default preview