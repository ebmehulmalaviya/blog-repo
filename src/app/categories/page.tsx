export default function Categories() {
  const categories = ['Web Development', 'UI/UX Design', 'Next.js', 'React', 'CSS', 'Tutorials'];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Categories</h2>
        <p>Browse articles by topic.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {categories.map((cat) => (
          <div key={cat} className="post-card" style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>{cat}</h3>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>View Articles &rarr;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
