import { useEffect, useState } from "react";
import { Feed } from "../models/feed.model";
import FeedCard from "./FeedCard";

const Feeds: React.FC = () => {

    const [feeds, setFeeds] = useState<Feed[]>();
    const feedsUrl = "http://52.238.241.69/api/feeds"

    useEffect(() => {
        const fetchFeeds = async () => {
            const response = await fetch(feedsUrl!);
            const data = await response.json();
            console.log(data)
            setFeeds(data);
        }

        fetchFeeds();
    }, []);

    return (
        <>
            {
                feeds?.map((feed) => (
                    <div className="mt-3">
                        <FeedCard feed={feed} ></FeedCard>
                    </div>
                ))
            }
        </>
    );
}

export default Feeds;