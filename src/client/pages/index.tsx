import Link from "next/link";
import Layout from '../components/MyLayout';
import PostLink from "../components/PostLink";
import fetch from 'isomorphic-unfetch';
import { NextPage } from "next";

interface Show { id: string, name: string };
type Props = { shows: [Show] };

const Index: NextPage<Props> = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <PostLink id={show.id} title={show.name} />
                </li>
            ))}
        </ul>
        <style jsx>{`
        h1 {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }`}</style>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;