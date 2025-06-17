export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa' }}>
      <p>&copy; {new Date().getFullYear()} My Company</p>
      <nav>
        <a href="/about" style={{ margin: '0 1rem' }}>About</a>
        <a href="/blog" style={{ margin: '0 1rem' }}>Blog</a>
      </nav>
    </footer>
  );
}