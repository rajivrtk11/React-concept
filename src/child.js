const { useState, useEffect, memo } = require("react")

const Child = (props) => {

    const onClickHandler = () => {
        setValue((prev, ) => {
            console.log('prev val is', prev)
            return prev+1;
        })
    }
    const [value, setValue] = useState(()=>{
        console.log(" Children Set state initialized")
        return 0
    });

    useEffect(() => {
        console.log('Inside Children useeffect with no dependency');
    })

    useEffect(() => {
        console.log('Inside Children useeffect with empty dependency');
    },[]);

    useEffect(() => {
        console.log('Inside Children useeffect with state dependency');

        return( () => {
            console.log('Inside Children useeffect with unmount dependency');
        }) 
    }, [value])

    console.log('before return inside parent');
    return <>I am Children component
        <button onClick={onClickHandler}> Parent Button</button>
    </>
}

export default memo(Child);