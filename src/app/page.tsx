export const metadata = {
  title: 'Insights — MyBlog',
  description: 'Notes from the build floor — articles on AI engineering, SaaS architecture, cloud costs, product design, and shipping software that lasts.',
  alternates: {
    canonical: '/',
  },
}

export default async function Home() {
  let posts: any[] = [];

  try {
    const res = await fetch(`${process.env.SOURCEABLE_BASE_URL}/blog/posts?limit=20`, {
      headers: {
        Authorization: `Bearer ${process.env.SOURCEABLE_API_KEY}`,
        // must match a registered origin exactly
      },
      next: { revalidate: 60 },
    })


    const responseJson = await res.json();
    console.log("=== API RESPONSE DATA ===", JSON.stringify(responseJson, null, 2));

    if (res.ok) {
      const { data } = responseJson;

      posts = Array.isArray(data) ? data.map((post: any, index: number) => ({
        id: post.id || index,
        title: post.title || 'Untitled Post',
        imageUrl: post.coverImageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=400',
        author: post.authorName || 'Unknown Author',
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown Date',
        excerpt: post.subtitle || 'An in-depth look at optimizing your web presence and strategy for the coming era of AI agents and automated systems.',
        tags: post.tags || (index === 0 ? ['AEO', 'CHECKLIST'] : ['INSIGHTS']),
      })) : [];
    } else {
      // Silencing the console error to clean up the terminal
      // Providing a fallback post to explain the API issue directly in the UI
      posts = [
        {
          id: 'error-post',
          title: 'API Error: 403 Forbidden (Free Plan)',
          excerpt: 'We successfully connected to dev-api.besourceable.com, but it rejected the request. You need to upgrade your Besourceable account to a paid plan that supports API access. Once you update your Bearer token, your real posts will appear here automatically!',
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          author: 'System Admin',
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=400',
          tags: ['403 Forbidden', 'API Issue']
        }
      ];
    }
  } catch (err) {
    console.error('Error fetching posts:', err);
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Latest Articles</h2>
        <p>Discover our most recent stories and updates.</p>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-image" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-author">{post.author}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>

              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {post.tags.map((tag: string) => (
                  <span key={tag} style={{ fontSize: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#" className="read-more">Read Article <span>&rarr;</span></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
