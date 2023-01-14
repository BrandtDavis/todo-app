import { ChangeEvent, Dispatch, SetStateAction } from "react";

const TextInput = (props: 
    { id: string, name: string, updateFunction: Dispatch<SetStateAction<string>> }
) => {

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        props.updateFunction(e.target.value)
    }

    return (
        <input 
            type="text" 
            id={props.id}
            name={props.name} 
            onChange={updateValue}
        />
    )
}

export default TextInput;