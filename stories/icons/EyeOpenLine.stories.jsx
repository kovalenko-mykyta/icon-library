import EyeOpenLine from '../../src/icons/EyeOpenLine';

export default {
  title: 'Icons/EyeOpenLine',
  component: EyeOpenLine,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <EyeOpenLine size={16} />
      <EyeOpenLine size={24} />
      <EyeOpenLine size={32} />
      <EyeOpenLine size={48} />
      <EyeOpenLine size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <EyeOpenLine size={32} color="#0066cc" />
      <EyeOpenLine size={32} color="#cc0000" />
      <EyeOpenLine size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'EyeOpenLine icon',
  },
};
