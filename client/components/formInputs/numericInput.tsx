import { ChangeEvent, Dispatch, SetStateAction } from "react";

const NumericInput = (props:
    { 
        name: string, 
        id: string, 
        labelValue: string,
        updateFunction: Dispatch<SetStateAction<number>>, 
    }
) => {

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateFunction(parseInt(e.target.value))        
    }

    return (
        <>
            <label htmlFor={props.name}>{ props.labelValue }</label>
            <input 
                type="number" 
                name={props.name}
                id={props.id}
                onChange={updateValue}
                required
            />
        </>
    )

}

export default NumericInput;