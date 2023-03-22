import CompanyItem from "./CompanyItem"


    function CompanyList({ companiesInfo, onCompanyClicked, reviews }) {

        // The Fisher-Yates algorithm
        const shuffledCompanies = companiesInfo => {
            for (let i = companiesInfo.length - 1; i > 0; i--){
                // Math.random finds a number between 0 and 1. Take this number and multiplies it by length of list. Math.floor rounds this number down to the nearest whole number, and that is the value of j
                const j = Math.floor(Math.random() * (i + 1));
                // go to the ith position in the list
                const temp = companiesInfo[i];
                // the ith position is now equal to the jth position
                companiesInfo[i] = companiesInfo[j];
                // the jth position is now equal to the previous ith position, which completes a full swap
                companiesInfo[j] = temp;
            }
            return companiesInfo
        }

        // the first 4 entries in the array of shuffledCompanies
        const shuffled = shuffledCompanies(companiesInfo).slice(0, 6);


        return (
            <ul>
                {shuffled.map((company) => (
                    <CompanyItem key={company.id} 
                    company={company} 
                    onCompanyClicked={onCompanyClicked}
                    reviews={reviews}
                        shuffledCompanies={shuffledCompanies}
                    />
                ))}
            </ul>
        );
    }


export default CompanyList