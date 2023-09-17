import './ProfilePrincipal.css'
import ProfileName from '../ProfileName/ProfileName';

const ProfilePrincipal = ()=>{
    return(
        <>
            <article className='profile__principal__content'>
                <div className='profile__principal'>
                    <div>

                    </div>
                </div>
                <div className='profile__principal'>
                    <div>
                        <div>
                            <div><p>0</p></div>
                            <div>Publicacion</div>
                        </div>
                        <div>
                            <div>764</div>
                            <div>Seguidores</div>
                        </div>
                        <div>
                            <div>252</div>
                            <div>Seguidos</div>
                        </div>                        
                    </div>
                    <ProfileName etiqueta={'div'} secondClass={'profile__name--two'}/>
                </div>
            </article>
        </>
    )
};

export default ProfilePrincipal