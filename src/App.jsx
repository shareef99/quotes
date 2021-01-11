import { useEffect, useState } from "react";
import "./App.css";

const useFetch = (url, count) => {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [tags, setTags] = useState([]);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        // const { quote } = data.content;
        setQuote(data.content);
        setAuthor(data.author);
        setTags(data.tags);
    }, [count]);

    return { quote, author, tags };
};

function App() {
    let [count, setCount] = useState(0);
    const { quote, author, tags } = useFetch(
        "https://api.quotable.io/random",
        count
    );

    const handleNextQuote = () => {
        setCount(++count);
    };

    return (
        <>
            <section className="flex items-center justify-center h-screen bg-red-300">
                <div
                    id="quote-box"
                    className="bg-gray-300 text-yellow-700 p-8 min-w-9/10 max-w-9/10 sm:max-w-3/4 md:max-w-6/10 lg:max-w-1/2"
                >
                    <div className="">
                        <p id="text" className="">
                            {quote}
                        </p>

                        <p
                            id="author"
                            title={author}
                            className="text-right pr-8 pt-4"
                        >
                            ~{author}
                        </p>
                    </div>
                    <div className="flex w-full justify-around p-8">
                        <a
                            href={`https://twitter.com/intent/tweet?hashtags=quotes,${tags.map(
                                (tag) => tag.replace("-", "")
                            )}&text=${quote}`}
                            target="_blank"
                            id="tweet-quote"
                            title="Tweet amazing Quote!"
                        >
                            Tweet
                        </a>
                        <button
                            id="new-quote"
                            onClick={handleNextQuote}
                            title="next quote"
                            className="outline-none border-none"
                        >
                            new quote
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
