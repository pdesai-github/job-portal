import ImageComponent from "../ImageTest";

const ProfileWidget: React.FC = () => {
    return (
        <div>
            <div className="card -flex flex-row p-2">
                <div>
                    <ImageComponent imageName="pradip.jpeg" height={50} width={50}></ImageComponent>
                </div>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileWidget;