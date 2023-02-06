
import "./subHeader.css";

const SubHeader = (props) => {
    
    return(
        <div className="subHeader-container">
            {props?.data && Object.keys(props.data).map(filterTerm => (
                <select className="select" key={filterTerm} defaultValue={filterTerm} onChange={(e) => props.onChange(e.target.value, filterTerm)}>
                    <option disabled>{filterTerm}</option>
                    {props.data[filterTerm].map(filterValue => (
                        <option className="option" key={filterValue} value={filterValue}>{filterValue}</option>
                    ))}
                </select>
            ))}
        </div>
    )
}

export default SubHeader;