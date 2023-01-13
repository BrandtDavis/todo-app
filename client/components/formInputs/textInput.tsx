import { Dispatch, SetStateAction } from "react";

const TextInput = (props: 
    { id: string, name: string, onChangeFunction: Dispatch<SetStateAction<string>> }
) => {
    return (
        <input 
            type="text" 
            id={props.id}
            name={props.name} 
            
            // Needs to be changed, doesn't work 
            onChange={e => props.onChangeFunction}
        />
    )
}

export default TextInput;