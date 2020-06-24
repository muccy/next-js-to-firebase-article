import useSWR from 'swr';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

type Quote = { author: string, quote: string };

const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json() as Promise<Quote>;
};

const contentFrom = (data: Quote | null, error: any | null) => {
    if (!data) {
        return "Loading...";
    }
    else if (error) {
        return "Failed to fetch quote";
    }
    else {
        return data.quote;
    }
};

const Quote = () => {
    const { data: quote, error } = useSWR("/api/randomQuote", fetcher);

    const author = quote?.author;
    const content = contentFrom(quote, error);

    return <Layout>
        <div className="quote">{content}</div>
        {author && <span className="author">— {author}</span>}

        <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </Layout>
};

export default Quote;