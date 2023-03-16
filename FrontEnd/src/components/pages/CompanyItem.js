import { Link } from "react-router-dom"


const CompanyItem = ({company, onCompanyClicked}) => {

    const handleClick = () => {
    onCompanyClicked(company)
    }

    return(
        <div>
            <li onClick={handleClick}>
                <Link to={`/companies/${company.id}`}>
                    <h2>{company.name}</h2>
                    <h3>{company.town}</h3>
                    <p>{company.description}</p>
                    <p>{company.rating}</p>
                </Link>
            </li>
            <li>
            </li>
        </div>
    )
}

export default CompanyItem