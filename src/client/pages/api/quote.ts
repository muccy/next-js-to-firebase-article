import { NextApiHandler } from "next";
import quotes from '../../assets/quotes.json'

const quoteForAuthor = (author: string) => {
    return quotes.find(quote => {
        return quote.author.toLowerCase().includes(author.toLowerCase());
    });
};

const quote: NextApiHandler = (req, res) => {
    const { author } = req.query;
    if (typeof author === 'string') {
        const quote = quoteForAuthor(author);
        if (quote) {
            res.status(200).json(quote);
        }
        else {
            res.status(404).json({ error: "No quote found" });
        }
    }
    else {
        res.status(404).json({ error: "No quote found" });
    }
};

export default quote;