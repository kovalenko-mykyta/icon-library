import BubbleTextLine from '../../src/icons/BubbleTextLine';

export default {
  title: 'Icons/BubbleTextLine',
  component: BubbleTextLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <BubbleTextLine size={16} />
      <BubbleTextLine size={24} />
      <BubbleTextLine size={32} />
      <BubbleTextLine size={48} />
      <BubbleTextLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <BubbleTextLine size={32} color="#0066cc" />
      <BubbleTextLine size={32} color="#cc0000" />
      <BubbleTextLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'BubbleTextLine icon',
  },
};
