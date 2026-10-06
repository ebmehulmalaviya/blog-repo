import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1>Welcome to the Blog</h1>
        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
