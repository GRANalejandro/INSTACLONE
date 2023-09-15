import './Profile.css'
import ProfilePrincipal from '../ProfilePrincipal/ProfilePrincipal';
import ProfileName from '../ProfileName/ProfileName';
import ProfileButtons from '../ProfileButtons/ProfileButtons';
import Stories from '../Stories/Stories';
import StoriesText from '../StoriesText/StoriesText';

const Profile = ()=>{
    return(
        <section className="profile">
            <ProfilePrincipal/>
            <ProfileName/>
            <ProfileButtons/>
            <StoriesText/>
            <Stories/>
        </section>
    )
};

export default Profile 