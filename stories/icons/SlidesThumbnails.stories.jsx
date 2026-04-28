import SlidesThumbnails from '../../src/icons/SlidesThumbnails';

export default {
  title: 'Icons/SlidesThumbnails',
  component: SlidesThumbnails,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SlidesThumbnails size={16} />
      <SlidesThumbnails size={24} />
      <SlidesThumbnails size={32} />
      <SlidesThumbnails size={48} />
      <SlidesThumbnails size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SlidesThumbnails size={32} color="#0066cc" />
      <SlidesThumbnails size={32} color="#cc0000" />
      <SlidesThumbnails size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'SlidesThumbnails icon',
  },
};
