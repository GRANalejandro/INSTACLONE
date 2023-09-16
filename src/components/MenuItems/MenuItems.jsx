import './MenuItems.css'

const MenuItem = ({url, alt, secondImg = false, secondUrl = null, secondAlt = null, text, onText = true})=>{
    return(
        <li className="menu__item">
            <img src={`./src/assets/images/${url}`} alt={alt} />
            {
                secondImg && (
                    <img src={`./src/assets/images/${secondUrl}`} alt={secondAlt} />
                )
            }
            {
                onText && (<p>{text}</p>)
            }
            
        </li>
    )
};

export default MenuItem