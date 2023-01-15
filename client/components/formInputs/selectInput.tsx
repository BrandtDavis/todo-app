import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const SelectInput = (props:
    {
        id: string,
        name: string,
        selectOptions: string[]
        updateFunction: Dispatch<SetStateAction<string>>,
    }
) => {

    const updateValue = (e: ChangeEvent<HTMLSelectElement>) => {
        props.updateFunction(e.target.value)
    }
    
    return (
        <>
            <select 
                name={props.name} 
                id={props.id}
                onChange={updateValue}
                >
            <option value=""></option>
            {props.selectOptions.map( val =>
                <option value={val}>{val}</option>
            )}
            </select>
        </>
    )

}

export default SelectInput;