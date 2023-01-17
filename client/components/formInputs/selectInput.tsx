import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const SelectInput = (
    props: 
    {
        name: string,
        id: string,
        labelValue: string,
        selectOptions: string[]
        updateFunction: Dispatch<SetStateAction<string>>,
    }
) => {

    const updateValue = (e: ChangeEvent<HTMLSelectElement>) => {
        props.updateFunction(e.target.value)
    }

    return (
        <>
            <label htmlFor={props.name}>{ props.labelValue }</label>
            <select 
                name={props.name} 
                id={props.id}
                onChange={updateValue}
                required
            >
            <option value=""></option>
            {props.selectOptions.map( val =>
                <option value={val} key={val}>{val}</option>
            )}
            </select>
            <span className="errorMessage">howdy</span>
        </>
    )

}

export default SelectInput;