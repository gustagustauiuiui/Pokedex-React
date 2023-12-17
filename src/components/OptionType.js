function OptionType({ className, type }) {

    return (
        <>
            <li className={className}>
                <label for={type}>{type}</label>
                <input type="checkbox" id={type} />
            </li>
        </>
    )
}

export default OptionType;