import './Component-Style/TopicBar.css'

const TopicBar = ({topic,dropDownVisible, setDropDownVisible}) => {

    const handleClick = () => {
        console.log(dropDownVisible);
        setDropDownVisible((value)=>{
            return value ? false : true;
        });
    }

    return <section className='TopicBar'>
        <h2>
        {topic} 
        </h2>
        <div className='changeTopic' onClick={handleClick}>
            {dropDownVisible ? "Close" : "Change Topic"}
        </div>
    </section>
};

export default TopicBar;