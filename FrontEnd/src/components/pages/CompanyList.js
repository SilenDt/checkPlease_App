import { useEffect, useState } from "react"
import { getCompanyInfo } from "../../services/CompanyServices"

const CompanyList = () => {

    const [companyInfo, setCompanyInfo] = useState([])

    useEffect(() => {
        getCompanyInfo()
        .then((allCompanyInfo) => {
            setCompanyInfo(allCompanyInfo)
        }, [])
    }

    )

    const mappedCompanyInfo = companyInfo.map(company => {
        return<CompanyItem/>
    })
}
