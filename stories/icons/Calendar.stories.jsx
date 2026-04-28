import Calendar from '../../src/icons/Calendar';

export default {
  title: 'Icons/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Calendar size={16} />
      <Calendar size={24} />
      <Calendar size={32} />
      <Calendar size={48} />
      <Calendar size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Calendar size={32} color="#0066cc" />
      <Calendar size={32} color="#cc0000" />
      <Calendar size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'Calendar icon',
  },
};
