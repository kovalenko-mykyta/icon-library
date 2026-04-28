import FilesCompareLine from '../../src/icons/FilesCompareLine';

export default {
  title: 'Icons/FilesCompareLine',
  component: FilesCompareLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FilesCompareLine size={16} />
      <FilesCompareLine size={24} />
      <FilesCompareLine size={32} />
      <FilesCompareLine size={48} />
      <FilesCompareLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FilesCompareLine size={32} color="#0066cc" />
      <FilesCompareLine size={32} color="#cc0000" />
      <FilesCompareLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'FilesCompareLine icon',
  },
};
