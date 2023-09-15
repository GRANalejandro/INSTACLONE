import MenuItem from "../MenuItems/MenuItems";
import './menu.css'

const Menu = ()=>{
    const images = [
     {
        image_rut: 'casa.png',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'casa.png',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'casa.png',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'casa.png',
        alt: 'Icono de la casa de la barra de navegacion de instagram'
     },
     {
        image_rut: 'casa.png',
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