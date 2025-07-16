import '../src/index.css'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f0fdf4',
        },
        {
          name: 'dark',
          value: '#14532d',
        },
        {
          name: 'glassmorphism',
          value: 'linear-gradient(135deg, #e6f6ee 0%, #bcf0d8 50%, #8ce9c1 100%)',
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;