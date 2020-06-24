import Link from 'next/link';
import { CSSProperties } from 'react';

const linkStyle: CSSProperties = {
    marginRight: 15
};

export default function Header() {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/quote">
                <a style={linkStyle}>Quote</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    );
};