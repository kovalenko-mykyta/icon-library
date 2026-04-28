import PencilSolid from '../../src/icons/PencilSolid';

export default {
  title: 'Icons/PencilSolid',
  component: PencilSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PencilSolid size={16} />
      <PencilSolid size={24} />
      <PencilSolid size={32} />
      <PencilSolid size={48} />
      <PencilSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PencilSolid size={32} color="#0066cc" />
      <PencilSolid size={32} color="#cc0000" />
      <PencilSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'PencilSolid icon',
  },
};
