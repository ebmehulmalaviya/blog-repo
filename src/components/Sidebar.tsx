'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="site-sidebar">
      <div className="sidebar-logo">
        <h2>MyBlog</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={pathname === '/' ? 'active' : ''}><Link href="/">Latest Posts</Link></li>
          <li className={pathname === '/categories' ? 'active' : ''}><Link href="/categories">Categories</Link></li>
          <li className={pathname === '/tags' ? 'active' : ''}><Link href="/tags">Tags</Link></li>
          <li className={pathname === '/archive' ? 'active' : ''}><Link href="/archive">Archive</Link></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>&copy; 2026 MyBlog</p>
      </div>
    </aside>
  );
}
