import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [tags, setTags] = useState([]);
    const colors = [
        { id: 1, color: "blueGray" },
        { id: 2, color: "coolGray" },
        { id: 3, color: "gray" }, //O
        { id: 4, color: "trueGray" },
        { id: 5, color: "warmGray" },
        { id: 6, color: "red" }, //O
        { id: 7, color: "orange" },
        { id: 8, color: "amber" },
        { id: 9, color: "yellow" }, //O
        { id: 10, color: "lime" },
        { id: 11, color: "green" }, //o
        { id: 12, color: "emerald" },
        { id: 13, color: "teal" },
        { id: 14, color: "cyan" },
        { id: 15, color: "lightBlue" },
        { id: 16, color: "blue" }, //O
        { id: 17, color: "indigo" }, //O
        { id: 18, color: "violet" },
        { id: 19, color: "purple" }, //O
        { id: 20, color: "fuchsia" },
        { id: 21, color: "pink" }, //O
        { id: 22, color: "rose" },
    ];
    const [color, setColor] = useState(colors[0].color);

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
        setColor(colors[randomNumber].color);
    };
    return (
        <>
            <section
                className={`flex items-center justify-center h-screen transition-colors duration-500 delay-75 ease-in bg-${color}-300`}
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
                <div className="bg-blue"></div>
            </section>
        </>
    );
}

export default App;
