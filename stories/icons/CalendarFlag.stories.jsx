import CalendarFlag from '../../src/icons/CalendarFlag';

export default {
  title: 'Icons/CalendarFlag',
  component: CalendarFlag,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CalendarFlag size={16} />
      <CalendarFlag size={24} />
      <CalendarFlag size={32} />
      <CalendarFlag size={48} />
      <CalendarFlag size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CalendarFlag size={32} color="#0066cc" />
      <CalendarFlag size={32} color="#cc0000" />
      <CalendarFlag size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'CalendarFlag icon',
  },
};
