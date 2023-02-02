import { createContext } from "react";

export default (component) => {
    const Component = component;

    const val = createContext()
    console.log('the context is', val)
    return function(props){
        return <Component num={10} {...props}> {() => console.log('hello world')}  </Component>
    }
}

