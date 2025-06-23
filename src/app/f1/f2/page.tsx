import Link from "next/link";
export default function F2Page() {
    return (
        <div>
            <h1>F2 Page</h1>
            <p>This is the content of the F2 page.</p>
            <Link href="/f4">F4</Link>
            <Link href="/f1/f2/inner-f2">Inner F2</Link>
        </div>
    );
}