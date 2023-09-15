import './Profile.css'
import Button from '../Button/Button';
import ProfilePrincipal from '../ProfilePrincipal/ProfilePrincipal';
import ProfileName from '../ProfileName/ProfileName';
import ProfileButtons from '../ProfileButtons/ProfileButtons';

const Profile = ()=>{
    return(
        <section className="profile">
            <ProfilePrincipal/>
            <ProfileName/>
            <ProfileButtons/>
        </section>
    )
};

export default Profile 