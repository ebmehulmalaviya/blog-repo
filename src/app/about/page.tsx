export default function About() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>About Us</h2>
        <p>Learn more about our mission and authors.</p>
      </div>
      <div className="post-card" style={{ padding: '2rem' }}>
        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          Welcome to MyBlog. We are dedicated to providing the best content regarding web development, modern frontend frameworks, and design principles. Our goal is to empower developers of all skill levels to create beautiful and performant applications.
        </p>
        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: '1rem' }}>
          This blog is built using Next.js, allowing for fast, server-rendered pages and an incredible user experience. Feel free to explore our articles and share your thoughts!
        </p>
      </div>
    </div>
  );
}
