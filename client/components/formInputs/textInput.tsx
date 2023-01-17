import { ChangeEvent, Dispatch, SetStateAction } from "react";

const TextInput = (props: 
    { 
        name: string, 
        id: string, 
        labelValue: string, 
        updateFunction: Dispatch<SetStateAction<string>>, 
    }
) => {

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateFunction(e.target.value)
    }

    return (
        <>
            <label htmlFor={props.name}>{ props.labelValue }</label>
            <input 
                type="text" 
                id={props.id}
                name={props.name} 
                onChange={updateValue}
                required
            />
        </>
    )
}

export default TextInput;