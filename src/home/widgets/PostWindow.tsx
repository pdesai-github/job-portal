import ImageComponent from "../ImageTest";

const PostWindow: React.FC = () => {
    return (
        <div className="card">
            <div className="d-flex flex-row p-2">
                <div><ImageComponent imageName="pradip.jpeg" height={50} width={50}></ImageComponent></div>
                <div  className="p-2 w-100"><input className="w-100 mt-1 rounded-pill border border-secondary h-100" type="text" /></div>
            </div>
            <div className="d-flex flex-row">
                <div className="d-flex flex-row p-2 w-25 ustify-content-center">
                    <div><ImageComponent imageName="video_icon.png" height={40} width={40}></ImageComponent></div>
                    <div><label className="mt-2">Photo</label></div>
                </div>
                <div className="d-flex flex-row p-2 w-50 justify-content-center">
                    <div><ImageComponent imageName="photo_icon.png" height={40} width={40}></ImageComponent></div>
                    <div className="px-2"><label className="mt-2">Photo</label></div>                     
                </div>
                <div className="d-flex flex-row p-2 w-25 justify-content-center">
                    <div><ImageComponent imageName="article.png" height={40} width={40}></ImageComponent></div>
                    <div><label className="mt-2">Article</label></div>                    
                </div>
            </div>
        </div>
    );
}

export default PostWindow;