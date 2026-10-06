export default function Contact() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Contact Us</h2>
        <p>Get in touch for collaborations or questions.</p>
      </div>
      <div className="post-card" style={{ padding: '2rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ fontWeight: 500 }}>Name</label>
            <input type="text" id="name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)' }} placeholder="Your Name" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontWeight: 500 }}>Email</label>
            <input type="email" id="email" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)' }} placeholder="your@email.com" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: 500 }}>Message</label>
            <textarea id="message" rows={5} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)' }} placeholder="How can we help?"></textarea>
          </div>
          <button type="button" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--accent)', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s' }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
