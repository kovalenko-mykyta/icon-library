import Download from '../../src/icons/Download';

export default {
  title: 'Icons/Download',
  component: Download,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Download size={16} />
      <Download size={24} />
      <Download size={32} />
      <Download size={48} />
      <Download size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Download size={32} color="#0066cc" />
      <Download size={32} color="#cc0000" />
      <Download size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'Download icon',
  },
};
