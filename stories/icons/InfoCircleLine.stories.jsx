import InfoCircleLine from '../../src/icons/InfoCircleLine';

export default {
  title: 'Icons/InfoCircleLine',
  component: InfoCircleLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <InfoCircleLine size={16} />
      <InfoCircleLine size={24} />
      <InfoCircleLine size={32} />
      <InfoCircleLine size={48} />
      <InfoCircleLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <InfoCircleLine size={32} color="#0066cc" />
      <InfoCircleLine size={32} color="#cc0000" />
      <InfoCircleLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'InfoCircleLine icon',
  },
};
