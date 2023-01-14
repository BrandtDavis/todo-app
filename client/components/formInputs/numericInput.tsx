import { ChangeEvent, Dispatch, SetStateAction } from "react";

const NumericInput = (props:
    { id: string, name: string, updateFunction: Dispatch<SetStateAction<number>> }
) => {

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateFunction(parseInt(e.target.value))        
    }

    return (
        <input 
            type="number" 
            id={props.id}
            name={props.name}
            onChange={updateValue}
        />
    )

}

export default NumericInput;