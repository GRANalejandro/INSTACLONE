import './ProfileName.css'

const ProfileName = ({etiqueta: Tagname, secondClass})=>{
    return(
        <Tagname className={`profile__name ${secondClass}`}>
            <p>Jhon</p>
            <p>**</p>
            <p>GOD'S-PLAN</p>
        </Tagname>
    )
};

export default ProfileName