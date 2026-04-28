import BubbleTextSolid from '../../src/icons/BubbleTextSolid';

export default {
  title: 'Icons/BubbleTextSolid',
  component: BubbleTextSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <BubbleTextSolid size={16} />
      <BubbleTextSolid size={24} />
      <BubbleTextSolid size={32} />
      <BubbleTextSolid size={48} />
      <BubbleTextSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <BubbleTextSolid size={32} color="#0066cc" />
      <BubbleTextSolid size={32} color="#cc0000" />
      <BubbleTextSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'BubbleTextSolid icon',
  },
};
