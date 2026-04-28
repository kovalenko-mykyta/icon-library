import PeopleCircle from '../../src/icons/PeopleCircle';

export default {
  title: 'Icons/PeopleCircle',
  component: PeopleCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PeopleCircle size={16} />
      <PeopleCircle size={24} />
      <PeopleCircle size={32} />
      <PeopleCircle size={48} />
      <PeopleCircle size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PeopleCircle size={32} color="#0066cc" />
      <PeopleCircle size={32} color="#cc0000" />
      <PeopleCircle size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'PeopleCircle icon',
  },
};
