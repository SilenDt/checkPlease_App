import { Link } from "react-router-dom"


const CompanyItem = ({company, onCompanyClicked}) => {

    const handleClick = () => {
    onCompanyClicked(company.id)
    }

    return(
        <div>
            <div onClick={handleClick}>
                <Link to={`/companies/${company.id}`}> 
                    <h2>{company.name}</h2>
                    <h3>{company.town}</h3>
                    <p>{company.description}</p>
                    <p>{company.rating}</p>
                </Link>
            </div>
            
        </div>
    )
}

export default CompanyItem