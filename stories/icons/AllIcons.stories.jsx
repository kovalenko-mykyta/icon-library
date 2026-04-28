import * as Icons from '../../src/icons/index';

export default {
  title: 'Icons/All Icons',
};

export const Gallery = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '24px', padding: '16px' }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon size={32} />
          <span style={{ fontSize: '11px', color: '#666', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
