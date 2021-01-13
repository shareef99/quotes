import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [tags, setTags] = useState([]);
    const colors = [
        "blueGray",
        "coolGray",
        "trueGray",
        "gray",
        "warmGray",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "lightBlue",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
    ];
    const [color, setColor] = useState(colors[0]);

    const getRandomQuoteAsync = async () => {
        const response = await axios.get("https://api.quotable.io/random");
        const data = await response.data;
        setQuote(data.content);
        setAuthor(data.author);
        setTags(data.tags);
    };

    useEffect(() => {
        getRandomQuoteAsync();
    }, []);

    const handleNextQuote = async () => {
        await getRandomQuoteAsync();
        let randomNumber = Math.floor(Math.random() * colors.length);
        setColor(colors[randomNumber]);
    };
    return (
        <>
            <section
                className={`flex flex-col items-center justify-center h-screen transition-colors duration-500 delay-75 ease-in bg-${color}-300`}
            >
                <div
                    id="quote-box"
                    className={`
                    bg-white
                    text-${color}-500 
                    px-8 pt-8 
                    min-w-9/2 max-w-9/10 
                    sm:min-w-3/4 sm:max-w-3/4 
                    md:min-w-6/10 md:max-w-6/10 
                    lg:min-w-1/2 lg:max-w-1/2
                    rounded-2xl
                    `}
                >
                    {/*  */}
                    <div className="">
                        <p
                            id="text"
                            className="text-center text-xl md:text-3xl"
                        >
                            <span className="text-3xl md:text-5xl">
                                &#10077;
                            </span>{" "}
                            {quote}
                        </p>
                        <p
                            id="author"
                            title={author}
                            className="text-right text-md sm:text-lg pr-8 pt-4"
                        >
                            ~{author}
                        </p>
                    </div>
                    <div className="flex w-full justify-between lg:justify-around py-8">
                        <a
                            href={`https://twitter.com/intent/tweet?hashtags=quotes,${tags.map(
                                (tag) => tag.replace("-", "")
                            )}&text=${quote}`}
                            target="_blank"
                            id="tweet-quote"
                            rel="noreferrer"
                            title="Tweet amazing Quote!"
                            className={`focus:outline-none bg-${color}-100 py-1 px-2 border-${color}-200 rounded-md`}
                        >
                            Tweet
                        </a>

                        <script
                            src="https://platform.linkedin.com/in.js"
                            type="text/javascript"
                        >
                            lang: en_US
                        </script>
                        <script
                            type="IN/Share"
                            data-url="https://www.linkedin.com"
                        ></script>

                        <button
                            id="new-quote"
                            onClick={handleNextQuote}
                            title="next quote"
                            className={`focus:outline-none bg-${color}-100 py-1 px-2 border-${color}-200 rounded-md`}
                        >
                            New quote
                        </button>
                    </div>
                </div>
                <div className={`pt-6 text-${color}-800 text-lg sm:text-xl`}>
                    <p>
                        <a
                            href="https://portfolio.shareef.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ~Shareef
                        </a>{" "}
                    </p>
                </div>
            </section>
        </>
    );
}

export default App;
