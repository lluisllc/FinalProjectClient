// eslint-disable-next-line
import { Divider } from '@mui/material';
import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Link, useParams } from 'react-router-dom';
import ad from "../adAPIThieves.png";
import AddExternalResource from '../components/AddExternalResource';
import ProfileResourceCard from '../components/ProfileResourceCard';
import { getProfileDetailsService } from '../services/profile.services';
import SearchBar from '../components/SearchBar';
import SubjectData from "../Data.json";

function ProfilePage(props) {
    const [profile, setProfile] = useState(null);

    const getProfile = async () => {
        localStorage.getItem('authToken');
        console.log("Render")
        try {
            const response = await getProfileDetailsService();
            console.log(response)
            setProfile(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProfile();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="wrapper">
                <div className="firstCol">
                    <SearchBar data={SubjectData} />
                </div>
                <div className="secondCol">
                    <br></br>
                    <br></br>
                    <h3>List of materials:</h3>
                    <br></br>
                    {profile &&
                        profile.pending.map((pResource) => {
                            return (
                                <>
                                    <ProfileResourceCard key={pResource._id} {...pResource} getProfile={getProfile} />
                                </>
                            )
                        })}

                    {profile &&
                        profile.pendingExternal.map((pResource) => {
                            return (
                                <>
                                    <ProfileResourceCard key={pResource._id} {...pResource} getProfile={getProfile} />
                                </>
                            )
                        })}
                        <hr></hr>
                    <AddExternalResource getProfile={getProfile} />
                </div>
                <div class="thirdCol">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={ad} alt="ad" />
                </div>
            </div>
        </>
    )
}
export default ProfilePage;