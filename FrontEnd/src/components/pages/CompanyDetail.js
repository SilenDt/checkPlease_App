import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { getOneCompany } from "../../services/CompanyServices";

const CompanyDetail = ({ companiesInfo, selectedCompany }) => {
    const { id } = useParams()

    const oneCompany = companiesInfo.find((company) => company.id == id);
    console.log({ oneCompany })

    return (
        <>
            <div>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">

                        <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tablist" aria-controls="overview" aria-selected="true">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tablist" aria-controls="reviews" aria-selected="false">Reviews</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="wages-tab" data-bs-toggle="tab" data-bs-target="#wages" type="button" role="tablist" aria-controls="wages" aria-selected="false">Wages</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab"> <br></br>
                        {oneCompany.name} <br></br>
                        {oneCompany.town} <br></br>
                        {oneCompany.rating} <br></br>
                        {oneCompany.description} <br></br>
                        Website: <br></br>
                        Email:
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <h2>Reviews</h2>
                        <p>lorekjfbjkfkdskdamda;,d,da kakkdakankdaklad aljlaald</p>
                    </div>
                    <div class="tab-pane fade" id="wages" role="tabpanel" aria-labelledby="wages-tab">Wages</div>
                </div>
            </div>

        </>
        // <>
        //     <div>

        //         <ul class="nav nav-tabs" id="myTab" role="tablist">
        //             <li class="nav-item" role="presentation">

        //                 <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tablist" aria-controls="overview" aria-selected="true">Overview</button>
        //             </li>
        //             <li class="nav-item" role="presentation">
        //                 <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tablist" aria-controls="reviews" aria-selected="false">Reviews</button>
        //             </li>
        //             <li class="nav-item" role="presentation">
        //                 <button class="nav-link" id="wages-tab" data-bs-toggle="tab" data-bs-target="#wages" type="button" role="tablist" aria-controls="wages" aria-selected="false">Wages</button>
        //             </li>
        //         </ul>
        //         <div class="tab-content" id="myTabContent">
        //             <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab"> <br></br>
        //             {oneCompany.name} <br></br>
        //             {oneCompany.town} <br></br>
        //             {oneCompany.rating} <br></br>
        //             {oneCompany.description} <br></br>
        //             Website: <br></br>
        //             Email:
        //             </div>
        //             <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
        //                 <h2>Reviews</h2>
        //                 <p>lorekjfbjkfkdskdamda;,d,da kakkdakankdaklad aljlaald</p>
        //             </div>
        //             <div class="tab-pane fade" id="wages" role="tabpanel" aria-labelledby="wages-tab">Wages</div>
        //         </div>
        //     </div>

        // </>
    );
}

export default CompanyDetail;
