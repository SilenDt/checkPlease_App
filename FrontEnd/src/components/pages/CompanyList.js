import CompanyItem from "./CompanyItem"

// const CompanyList = ({ companiesInfo, onCompanyClicked }) => {

    function CompanyList({ companiesInfo, onCompanyClicked, reviews }) {
        return (
            <ul>
                {companiesInfo.map((company) => (
                    <CompanyItem key={company.id} 
                    company={company} 
                    onCompanyClicked={onCompanyClicked}
                    reviews={reviews}/>
                ))}
            </ul>
        );
    }

    

    // const mappedCompaniesInfo = companiesInfo.map((company) => {
    //     return <CompanyItem
    //     key={company.id}
    //     company={company} 
    //     onCompanyClicked={onCompanyClicked}
    //     />
    // })


    // return(
    //     <div>
    //         <ul>
    //         {mappedCompaniesInfo}
    //         </ul>
    //     </div>
    // )
// }

export default CompanyList