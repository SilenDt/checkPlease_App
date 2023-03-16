import CompanyItem from "./CompanyItem"

const CompanyList = ({companiesInfo}) => {

    const mappedCompaniesInfo = companiesInfo.map((company) => {
        return<CompanyItem
        company={company}
        />
    })

    return(
        <div>
            <ul>
            {mappedCompaniesInfo}
            </ul>
        </div>
    )
}

export default CompanyList