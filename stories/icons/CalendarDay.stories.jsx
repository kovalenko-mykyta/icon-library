import CalendarDay from '../../src/icons/CalendarDay';

export default {
  title: 'Icons/CalendarDay',
  component: CalendarDay,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CalendarDay size={16} />
      <CalendarDay size={24} />
      <CalendarDay size={32} />
      <CalendarDay size={48} />
      <CalendarDay size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CalendarDay size={32} color="#0066cc" />
      <CalendarDay size={32} color="#cc0000" />
      <CalendarDay size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'CalendarDay icon',
  },
};
