import MenuItem from "../MenuItems/MenuItems";
import './menu.css'

const Menu = ()=>{
    const images = [
     {
        image_rut: 'house.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'magnifying.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'square.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'feels.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'profile.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
    ]
    return(
        <ul className="menu">
            {
                images.map((image)=>(
                    <MenuItem url={image.image_rut} alt={image.alt}/>
                ))
            }    
        </ul>
    )
};

export default Menu