import FilesCompareSolid from '../../src/icons/FilesCompareSolid';

export default {
  title: 'Icons/FilesCompareSolid',
  component: FilesCompareSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FilesCompareSolid size={16} />
      <FilesCompareSolid size={24} />
      <FilesCompareSolid size={32} />
      <FilesCompareSolid size={48} />
      <FilesCompareSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FilesCompareSolid size={32} color="#0066cc" />
      <FilesCompareSolid size={32} color="#cc0000" />
      <FilesCompareSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'FilesCompareSolid icon',
  },
};
