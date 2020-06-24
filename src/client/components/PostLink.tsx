import Link from 'next/link';

type Props = { id: String, title: String };

const PostLink = (props: Props) => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
            a {
                font-family: 'Arial';
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

export default PostLink;