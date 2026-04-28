import SparklesThreeLine from '../../src/icons/SparklesThreeLine';

export default {
  title: 'Icons/SparklesThreeLine',
  component: SparklesThreeLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SparklesThreeLine size={16} />
      <SparklesThreeLine size={24} />
      <SparklesThreeLine size={32} />
      <SparklesThreeLine size={48} />
      <SparklesThreeLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SparklesThreeLine size={32} color="#0066cc" />
      <SparklesThreeLine size={32} color="#cc0000" />
      <SparklesThreeLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'SparklesThreeLine icon',
  },
};
