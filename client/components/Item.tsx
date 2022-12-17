interface ItemProps {
    label: string;
}

export default function Item (props: ItemProps) {
    return (
        <div className="item-container">
            <input id="check1" className="item-status-checkbox" type="checkbox" />
            <label htmlFor="check1">{props.label}</label>
        </div>
    )
}