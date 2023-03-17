import { useParams } from "react-router"

const CompanyDetail = ({companiesInfo, selectedCompany}) => {
    const {id} = useParams()
    const oneCompany = companiesInfo.find((company) => company.id === selectedCompany(id));
    console.log(selectedCompany(id))
    console.log(oneCompany)

    return(
        <>
            <div>
                {oneCompany.name}
            </div>
        </>
    )
}

export default CompanyDetail