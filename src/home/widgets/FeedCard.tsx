import { Feed } from "../models/feed.model";

interface FeedCardProps {
    feed: Feed
}

const FeedCard:React.FC<FeedCardProps> = ({ feed })=>{
    console.log("Feedcard : ",feed)

    return(
        <div className="card p-2">
            <div className="p2 d-flex justify-content-left"><h5>{feed.title}</h5></div>
            <div className="p2 d-flex justify-content-left"><h6>{feed.description}</h6></div>
        </div>
    );
}

export default FeedCard;