import Link from 'next/link';
export default function F1Page() {
    return (
        <div>
            <h1>F1 Page</h1>
            <p>This is the content of the F1 page.</p>
            <Link href="/f1/f2">F2</Link>
            <Link href="/f3">F3</Link>

        </div>
      
    );
}