import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { getOneCompany } from "../../services/CompanyServices";

const CompanyDetail = ({companiesInfo, selectedCompany}) => {
    const {id} = useParams()

    const oneCompany = companiesInfo.find((company) => company.id == id);
    console.log({oneCompany})

    return(
        <>
            <div>
            {oneCompany.name}
            </div>
        </>
    );
}

export default CompanyDetail;


// MAKE A COMPANY PAGE COMPONENT WITH SET SELECT setSelectedCountry (find country from database from findOneCompany ) AND LET THAT HANDLE THE SELECT, THEN RENDER DETAIL