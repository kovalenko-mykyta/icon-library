import WriteSolid from '../../src/icons/WriteSolid';

export default {
  title: 'Icons/WriteSolid',
  component: WriteSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <WriteSolid size={16} />
      <WriteSolid size={24} />
      <WriteSolid size={32} />
      <WriteSolid size={48} />
      <WriteSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <WriteSolid size={32} color="#0066cc" />
      <WriteSolid size={32} color="#cc0000" />
      <WriteSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'WriteSolid icon',
  },
};
