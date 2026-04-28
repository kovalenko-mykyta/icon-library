import ChevronRightSmall from '../../src/icons/ChevronRightSmall';

export default {
  title: 'Icons/ChevronRightSmall',
  component: ChevronRightSmall,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ChevronRightSmall size={16} />
      <ChevronRightSmall size={24} />
      <ChevronRightSmall size={32} />
      <ChevronRightSmall size={48} />
      <ChevronRightSmall size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ChevronRightSmall size={32} color="#0066cc" />
      <ChevronRightSmall size={32} color="#cc0000" />
      <ChevronRightSmall size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'ChevronRightSmall icon',
  },
};
