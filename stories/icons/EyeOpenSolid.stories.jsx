import EyeOpenSolid from '../../src/icons/EyeOpenSolid';

export default {
  title: 'Icons/EyeOpenSolid',
  component: EyeOpenSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <EyeOpenSolid size={16} />
      <EyeOpenSolid size={24} />
      <EyeOpenSolid size={32} />
      <EyeOpenSolid size={48} />
      <EyeOpenSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <EyeOpenSolid size={32} color="#0066cc" />
      <EyeOpenSolid size={32} color="#cc0000" />
      <EyeOpenSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'EyeOpenSolid icon',
  },
};
