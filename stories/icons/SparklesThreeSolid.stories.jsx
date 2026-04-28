import SparklesThreeSolid from '../../src/icons/SparklesThreeSolid';

export default {
  title: 'Icons/SparklesThreeSolid',
  component: SparklesThreeSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SparklesThreeSolid size={16} />
      <SparklesThreeSolid size={24} />
      <SparklesThreeSolid size={32} />
      <SparklesThreeSolid size={48} />
      <SparklesThreeSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SparklesThreeSolid size={32} color="#0066cc" />
      <SparklesThreeSolid size={32} color="#cc0000" />
      <SparklesThreeSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'SparklesThreeSolid icon',
  },
};
