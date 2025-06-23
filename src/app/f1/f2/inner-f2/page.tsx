import Link from "next/link";
export default function InnerF2Page() {
    return (
        <div>
            <h1>Inner F2 Page</h1>
            <p>This is the content of the Inner F2 page.</p>
            <Link href="/f5">F5</Link>
        </div>
    );
}