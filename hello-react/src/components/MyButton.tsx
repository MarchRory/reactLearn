import { useState } from "react";

const MyButton = () => {
    const [count, setCount] = useState(0)
    function add(){
        setCount(count+1)
    }
    
    return (
    	<>
            <p >{count}</p>
        	<button onClick={add}>click me</button>
        </>
    )
}
 
export default MyButton;