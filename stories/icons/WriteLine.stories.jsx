import WriteLine from '../../src/icons/WriteLine';

export default {
  title: 'Icons/WriteLine',
  component: WriteLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <WriteLine size={16} />
      <WriteLine size={24} />
      <WriteLine size={32} />
      <WriteLine size={48} />
      <WriteLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <WriteLine size={32} color="#0066cc" />
      <WriteLine size={32} color="#cc0000" />
      <WriteLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'WriteLine icon',
  },
};
