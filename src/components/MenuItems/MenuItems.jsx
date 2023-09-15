import './MenuItems.css'

const MenuItem = ({url, alt})=>{
    return(
        <li className="menu__item">
            <img src={`./src/assets/images/${url}`} alt={alt} />
        </li>
    )
};

export default MenuItem