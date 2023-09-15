import './Stories.css'
import StoriesItem from '../StoriesItems/StoriesItems';

const Stories = ()=>{
    return(
        <article className='stories'>
            <div className='stories__content'>
                <StoriesItem/>
                <StoriesItem/>
                <StoriesItem/>
                <StoriesItem/>
                <StoriesItem/>
                <StoriesItem/>
            </div>
        </article>
    )
};

export default Stories