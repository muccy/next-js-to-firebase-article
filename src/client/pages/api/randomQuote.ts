import { NextApiHandler } from "next";
import quotes from '../../assets/quotes.json'

 const randomQuote: NextApiHandler = (req, res) => {
    const idx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[idx];
    res.status(200).json(quote);
};

export default randomQuote;