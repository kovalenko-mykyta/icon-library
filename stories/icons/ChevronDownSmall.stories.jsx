import ChevronDownSmall from '../../src/icons/ChevronDownSmall';

export default {
  title: 'Icons/ChevronDownSmall',
  component: ChevronDownSmall,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ChevronDownSmall size={16} />
      <ChevronDownSmall size={24} />
      <ChevronDownSmall size={32} />
      <ChevronDownSmall size={48} />
      <ChevronDownSmall size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ChevronDownSmall size={32} color="#0066cc" />
      <ChevronDownSmall size={32} color="#cc0000" />
      <ChevronDownSmall size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'ChevronDownSmall icon',
  },
};
