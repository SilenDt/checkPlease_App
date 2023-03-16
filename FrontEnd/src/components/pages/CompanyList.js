import CompanyItem from "./CompanyItem"

const CompanyList = ({companiesInfo, onCompanyClicked}) => {

    const mappedCompaniesInfo = companiesInfo.map((company) => {
        return<CompanyItem
        company={company} 
        onCompanyClicked={onCompanyClicked}
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