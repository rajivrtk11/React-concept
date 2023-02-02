import { useState } from 'react'
import './index.css'

const CheckBox = () => {
    const [data, setData] = useState([{ id: 1, checked: false }, { id: 2, checked: false }, { id: 3, checked: false }])
    const handleChange = (cele) => {
        let temp = data?.map((ele) => {
            if(ele?.id === cele?.id){
                return(
                    {
                        ...ele,
                        checked: !cele?.checked
                    }
                )
            }
            return ele;
        })
    }
    return <>
        {
            data?.map((ele) => {
                <div class="container" key={ele?.id}>
                    <div class="round">
                        <input type="checkbox" checked id="checkbox" onChange={() => handleChange(ele)} />
                        <label for="checkbox"></label>
                    </div>
                </div>
            })
        }
    </>
}

export default CheckBox