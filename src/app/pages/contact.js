import Link from "next/link";

export default function Social()
{
    return (
        <>
        <h1>Social Links</h1>
        <h3>Follow Me On</h3>
        <div className="container5">
            <Link href={"https://www.instagram.com/rupe.sh790/"} className="link1">Instagram</Link>
            <Link href='https://x.com/RupeshPure8318' className="link2">X</Link>
            <Link href={"https://rupeshsspace17.quora.com/"} className="link3">Quora</Link>
        </div>
        </>
    )
}