import Upload from '../../src/icons/Upload';

export default {
  title: 'Icons/Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Upload size={16} />
      <Upload size={24} />
      <Upload size={32} />
      <Upload size={48} />
      <Upload size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Upload size={32} color="#0066cc" />
      <Upload size={32} color="#cc0000" />
      <Upload size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'Upload icon',
  },
};
