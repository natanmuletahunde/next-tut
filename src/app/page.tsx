import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>Welcome Home!</h1>
            <p>This is the home page of the application.</p>
            <p>Explore the products and enjoy your stay!</p>
            <Link href='product'> Product</Link>
        </>
    );
}