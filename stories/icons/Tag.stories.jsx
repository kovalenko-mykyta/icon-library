import Tag from '../../src/icons/Tag';

export default {
  title: 'Icons/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tag size={16} />
      <Tag size={24} />
      <Tag size={32} />
      <Tag size={48} />
      <Tag size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tag size={32} color="#0066cc" />
      <Tag size={32} color="#cc0000" />
      <Tag size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'Tag icon',
  },
};
