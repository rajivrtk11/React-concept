import Children  from "./child";
const { useState, useEffect, Component } = require("react")

export default  () => {

    const [value, setValue] = useState(()=>{
        console.log(" Parent Set state initialized")
        return true;
    });
    // console.log('before useeffect hooks');
    const func = () => {
        for(let i = 0; i < 5; i++){
            console.log('helloo i', i);
        }
        return 1;
    }
    useEffect(() => {
        console.log('Inside parent useeffect with no dependency');
    })

    useEffect(() => {
        console.log('Inside parent useeffect with empty dependency');
    },[]);

    useEffect(() => {
        console.log('Inside parent useeffect with state dependency');

        return( () => {
            console.log('Inside parent useeffect with unmount dependency');
        }) 
    }, [value])

    const valueFun = () => {
        setValue( (prev) => !prev);
    }

    // console.log('before return inside parent');
    return <>
        <div>I am parent component</div>
        <button onClick={valueFun}> Parent Button</button>
        <Children/>
        <h2>{func()}</h2>
        {/* {console.log('inside render')} */}
    </>
}

