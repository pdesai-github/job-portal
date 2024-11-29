import LayoutMain from "../layout/LayoutMain";
import PostWindow from "./widgets/PostWindow";
import ProfileWidget from "./widgets/ProfileWidget";
import TrendingNowWidget from "./widgets/TrendingNowWidget";

const Home:React.FC = ()=>{
    return(
        <div>
            <LayoutMain left={ProfileWidget} center={PostWindow} right={TrendingNowWidget}></LayoutMain>
        </div>
    );
}

export default Home;