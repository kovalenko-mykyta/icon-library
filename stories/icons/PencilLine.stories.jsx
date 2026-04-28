import PencilLine from '../../src/icons/PencilLine';

export default {
  title: 'Icons/PencilLine',
  component: PencilLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PencilLine size={16} />
      <PencilLine size={24} />
      <PencilLine size={32} />
      <PencilLine size={48} />
      <PencilLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PencilLine size={32} color="#0066cc" />
      <PencilLine size={32} color="#cc0000" />
      <PencilLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'PencilLine icon',
  },
};
