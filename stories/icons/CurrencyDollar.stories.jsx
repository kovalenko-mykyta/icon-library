import CurrencyDollar from '../../src/icons/CurrencyDollar';

export default {
  title: 'Icons/CurrencyDollar',
  component: CurrencyDollar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: 'color' },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CurrencyDollar size={16} />
      <CurrencyDollar size={24} />
      <CurrencyDollar size={32} />
      <CurrencyDollar size={48} />
      <CurrencyDollar size={64} />
    </div>
  ),
};

export const WithColor = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CurrencyDollar size={32} color="#0066cc" />
      <CurrencyDollar size={32} color="#cc0000" />
      <CurrencyDollar size={32} color="#00aa44" />
    </div>
  ),
};

export const WithAriaLabel = {
  args: {
    size: 32,
    'aria-label': 'CurrencyDollar icon',
  },
};
