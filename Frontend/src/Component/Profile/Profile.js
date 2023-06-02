import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header2 from '../header2';
//import NavBar from '../NavBar/NavBar';
import './profile.css'

const Profile = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            

            <div className="profile-container">
                <div className="profile-left">
                </div>
                <div className="profile-right">
                    <div className="profile-right-header">
                        <h1>Profile</h1>
                    </div>
                    <div className="profile-info">
                        
                        <div className='inside-profile-info'>
                            <h1>{loggedInUser.NAME}</h1>
                            <h3>{loggedInUser.COUNTRY}</h3>
                            <h1>{loggedInUser.EMAIL}</h1>
                            
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>

        </div>
    );
};

export default Profile;