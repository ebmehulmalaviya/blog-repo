export default function Archive() {
  const months = [
    { name: 'October 2026', count: 3 },
    { name: 'September 2026', count: 5 },
    { name: 'August 2026', count: 2 },
    { name: 'July 2026', count: 8 },
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Archive</h2>
        <p>Explore our older posts by month.</p>
      </div>
      <div className="post-card" style={{ padding: '0' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {months.map((month, index) => (
            <li key={month.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 2rem', borderBottom: index < months.length - 1 ? '1px solid var(--border-color)' : 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}>
              <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{month.name}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{month.count} articles</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
