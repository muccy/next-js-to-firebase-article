import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Markdown from 'react-markdown';

interface ShowImage { medium?: string }
interface Show { name: string, summary: string, image: ShowImage };
type Props = { show: Show };

const Page: NextPage<Props> = props => {
    const markdownSource = `
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
        `;
    return (
        <Layout>
            <h1>{ props.show.name }</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            { props.show.image ? <img src={props.show.image.medium} /> : null }
            <div className="markdown">
                <Markdown source={markdownSource} />
            </div>
            <style jsx global>{`
                .markdown {
                    font-family: 'Arial';
                }

                .markdown a {
                    text-decoration: none;
                    color: blue;
                }

                .markdown a:hover {
                    opacity: 0.6;
                }

                .markdown h3 {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase;
                }
            `}</style>
        </Layout>
    );
};

Page.getInitialProps = async context => {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    console.log("ciao");
    const show = await res.json();
    return { show };
}

export default Page;