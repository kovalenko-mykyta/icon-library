import InfoCircleSolid from '../../src/icons/InfoCircleSolid';

export default {
  title: 'Icons/InfoCircleSolid',
  component: InfoCircleSolid,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <InfoCircleSolid size={16} />
      <InfoCircleSolid size={24} />
      <InfoCircleSolid size={32} />
      <InfoCircleSolid size={48} />
      <InfoCircleSolid size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <InfoCircleSolid size={32} color="#0066cc" />
      <InfoCircleSolid size={32} color="#cc0000" />
      <InfoCircleSolid size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'InfoCircleSolid icon',
  },
};
