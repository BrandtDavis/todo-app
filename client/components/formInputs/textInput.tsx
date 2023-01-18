import { 
    useState, 
    ChangeEvent, 
    Dispatch, 
    SetStateAction, 
    FocusEvent, 
} from "react";


const TextInput = (
    props: 
    { 
        name: string, 
        id: string, 
        labelValue: string, 
        updateFunction: Dispatch<SetStateAction<string>>, 
    }
) => {

    const [focused, setFocused] = useState(false);

    const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateFunction(e.target.value)
    }

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    }

    return (
        <>
            <label htmlFor={props.name}>{ props.labelValue }</label>
            <input 
                type="text" 
                id={props.id}
                name={props.name} 
                onChange={updateValue}
                onBlur={handleFocus}
                required
            />
            <span className="errorMessage">howdy</span>
        </>
    )
}

export default TextInput;