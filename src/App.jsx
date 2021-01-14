import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [tags, setTags] = useState([]);
    const colors = [
        { id: 1, bgColor: "bg-blueGray-300", textColor: "text-blueGray-500" },
        { id: 2, bgColor: "bg-coolGray-300", textColor: "text-coolGray-500" },
        { id: 3, bgColor: "bg-trueGray-300", textColor: "text-trueGray-500" },
        { id: 4, bgColor: "bg-gray-300", textColor: "text-gray-500" },
        { id: 5, bgColor: "bg-warmGray-300", textColor: "text-warmGray-500" },
        { id: 6, bgColor: "bg-red-300", textColor: "text-red-500" },
        { id: 7, bgColor: "bg-orange-300", textColor: "text-orange-500" },
        { id: 8, bgColor: "bg-amber-300", textColor: "text-amber-500" },
        { id: 9, bgColor: "bg-yellow-300", textColor: "text-yellow-500" },
        { id: 10, bgColor: "bg-lime-300", textColor: "text-lime-500" },
        { id: 11, bgColor: "bg-green-300", textColor: "text-green-500" },
        { id: 12, bgColor: "bg-emerald-300", textColor: "text-emerald-500" },
        { id: 13, bgColor: "bg-teal-300", textColor: "text-teal-500" },
        { id: 14, bgColor: "bg-cyan-300", textColor: "text-cyan-500" },
        {
            id: 15,
            bgColor: "bg-lightBlue-500",
            textColor: "text-lightBlue-300",
        },
        { id: 16, bgColor: "bg-blue-300", textColor: "text-blue-500" },
        { id: 17, bgColor: "bg-indigo-300", textColor: "text-indigo-500" },
        { id: 18, bgColor: "bg-violet-300", textColor: "text-violet-500" },
        { id: 19, bgColor: "bg-purple-300", textColor: "text-purple-500" },
        { id: 20, bgColor: "bg-fuchsia-300", textColor: "text-fuchsia-500" },
        { id: 21, bgColor: "bg-pink-300", textColor: "text-pink-500" },
        { id: 22, bgColor: "bg-rose-300", textColor: "text-rose-500" },
    ];
    const [bgColor, setBgColor] = useState(colors[0].bgColor);
    const [textColor, setTextColor] = useState(colors[0].textColor);

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
        setBgColor(colors[randomNumber].bgColor);
        setTextColor(colors[randomNumber].textColor);
    };
    return (
        <>
            <section
                className={`flex flex-col items-center justify-center h-screen transition-colors duration-500 delay-75 ease-in ${bgColor}`}
            >
                <div
                    id="quote-box"
                    className={`bg-white ${textColor} px-8 pt-8 min-w-9/2 max-w-9/10 sm:min-w-3/4 sm:max-w-3/4 md:min-w-6/10 md:max-w-6/10 lg:min-w-1/2 lg:max-w-1/2 rounded-2xl`}
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
                            className={`focus:outline-none ${bgColor} py-1 px-2 rounded-md`}
                        >
                            Tweet
                        </a>   
                                      
                        <button
                            id="new-quote"
                            onClick={handleNextQuote}
                            title="next quote"
                            className={`focus:outline-none ${bgColor} py-1 px-2 rounded-md`}
                        >
                            New quote
                        </button>
                    </div>
                </div>
                <div className={`pt-6 ${textColor} text-lg sm:text-xl`}>
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
