export default function Tags() {
  const tags = ['#frontend', '#javascript', '#typescript', '#tailwindcss', '#performance', '#webdesign', '#coding'];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Tags</h2>
        <p>Find specific topics by tag.</p>
      </div>
      <div className="post-card" style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {tags.map((tag) => (
          <span key={tag} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
