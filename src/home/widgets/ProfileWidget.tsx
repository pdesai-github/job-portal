import { useEffect, useState } from "react";
import ImageComponent from "../ImageTest";
import { User } from "../models/user.model";
import { env } from "process";

const ProfileWidget: React.FC = () => {

    const [users, setUsers] = useState<User[]>();
    const userUrl = process.env.REACT_APP_USER_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(userUrl!);
            const data = await response.json();
            console.log("fetchData : ", data);
            setUsers(data)
        }

        fetchData();
    },[]);

    return (
        <div>
            <div className="card -flex flex-row p-2">
                {users && users.length > 0 ? (
                    <>
                        <div>
                            <ImageComponent imageName="pradip.jpeg" height={75} width={75}></ImageComponent>
                        </div>
                        <div className="container">
                            <h4><b>{users[1].username}</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </>
                ) : (
                    <p>Loading user data...</p> // or any fallback UI when users are not available
                )}
            </div>
        </div>
    );
}

export default ProfileWidget;