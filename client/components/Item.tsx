interface ItemProps {
    label: string;
}

export default function Item (props: ItemProps) {
    return (
        <div className="item-container">
            {props.label}
        </div>
    )
}