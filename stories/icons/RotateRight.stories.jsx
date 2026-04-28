import RotateRight from '../../src/icons/RotateRight';

export default {
  title: 'Icons/RotateRight',
  component: RotateRight,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <RotateRight size={16} />
      <RotateRight size={24} />
      <RotateRight size={32} />
      <RotateRight size={48} />
      <RotateRight size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <RotateRight size={32} color="#0066cc" />
      <RotateRight size={32} color="#cc0000" />
      <RotateRight size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'RotateRight icon',
  },
};
