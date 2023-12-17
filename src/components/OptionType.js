function OptionType({ className, type }) {
    return (
        <>
            <li className={className}>
                <label htmlFor={type}>{type}</label>
                <input type="checkbox" id={type} />
            </li>
        </>
    )
}

export default OptionType;