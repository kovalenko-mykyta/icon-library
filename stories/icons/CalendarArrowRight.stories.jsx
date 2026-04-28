import CalendarArrowRight from '../../src/icons/CalendarArrowRight';

export default {
  title: 'Icons/CalendarArrowRight',
  component: CalendarArrowRight,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CalendarArrowRight size={16} />
      <CalendarArrowRight size={24} />
      <CalendarArrowRight size={32} />
      <CalendarArrowRight size={48} />
      <CalendarArrowRight size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CalendarArrowRight size={32} color="#0066cc" />
      <CalendarArrowRight size={32} color="#cc0000" />
      <CalendarArrowRight size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'CalendarArrowRight icon',
  },
};
