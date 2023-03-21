import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getJobTypesInfo } from '../../services/JobTypeServices';
import { FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { postReview } from '../../services/ReviewService';


const ReviewForm = ({jobTypes, companiesInfo, tipOutTypes, userDetailsByUid})=> {
    //Initialize form state with useState:
    //The useState hook returns an array containing the current state value and a function to update the state

    const [company, setCompany] = useState()
    const [tipOutType, setTipOutType] = useState()
    const [jobType, setJobType] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [doYouTipOut, setDoYouTipOut] = useState("")
    const hourlyRateRef = useRef()
    const prosRef = useRef()
    const consRef = useRef()
    const additionalCommentsRef = useRef()
    const overallRatingRef = useRef()
    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useAuth()
    



    async function handleSubmit(e) {
        e.preventDefault();
        // if(firstNameRef === null || lastNameRef === null){
        //     setError("All fields are required")
        // }
        try {
            setError("")
            setLoading(true)

            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            // This arrangement can be altered based on how we want the date's format to appear.
            let currentDate = `${day}-${month}-${year}`;
            console.log(currentDate); // "17-6-2022"

            const reviewDetails = {
                company: company,
                jobType: jobType,
                doYouTipOut: doYouTipOut,
                tipOutType: tipOutType,
                hourlyRate: parseFloat(hourlyRateRef.current.value),
                pros: prosRef.current.value,
                cons: consRef.current.value,
                additionalComments: additionalCommentsRef.current.value,
                user: userDetailsByUid,
                date: currentDate,
                overallRating: parseFloat(overallRatingRef.current.value)
            }
            console.log(userDetailsByUid)
            console.log("this is the review details")
            console.log(reviewDetails)

            await postReview(reviewDetails)
            navigate("/")
        } catch {
            setError("failed to post review")
        }
        setLoading(false)
    }

    const jobTypeOptions = jobTypes.map((jobType) => (
            <option value={jobType.jobRole}>{jobType.jobRole}</option>
    ));

    const handleJobTitleChoiceChange = (e) => {
        const findObj=jobTypes.find(job=>job.jobRole===e.target.value)
        // setSelectJob(Number(chosenJob)) 
        setJobType(findObj) 
    }

    const companyOptions = companiesInfo.map((company) => {
        return <option value={company.name}>{company.name}</option>
    })

    const handleCompanyChoiceChange = (e) => {
        const findObj=companiesInfo.find(company=>company.name===e.target.value)
        setCompany(findObj) 
    }

    const handleDoYouTipOutChange = (event) => {
        setDoYouTipOut(event.target.value);
    };

    const tipOutTypeOptions = tipOutTypes.map((tipOutType) => {
        return <option value={tipOutType.tipOutMethod}>{tipOutType.tipOutMethod}</option>
    })

    const handleTipOutChoiceChange = (e) => {
        const findObj=tipOutTypes.find(tipOutType=>tipOutType.tipOutMethod===e.target.value)
        setTipOutType(findObj)
    }



    //beginning of review form
    // const [formData, setFormData] = useState(
    //     {
    //         companyName: '',
    //         jobType: '',
    //         doYouTipOut: '',
    //         tipOutType: '',
    //         hourlyRate: '',
    //         pros: '',
    //         cons: '',
    //         additionalComments: '',
    //         user: userDetailsByUid
    //     }
    // );

    // THIS OPTION DOES NOT HAVE A VALUE
    // const companyOptions = companiesInfo.map((company) => {
    //     return <option value={company.id}>{company.name}</option>
    // })

    // const handleCompanyChoiceChange = (event) => {
    //     setFormData({...formData, companyName: event.target.value})
    // }
    // console.log(formData.companyName)

    // const handleJobTitleChoiceChange = (event) => {
    //     setFormData({ ...formData, jobType: event.target.value });
    // };
    
    // const handleDoYouTipOutChange = (event) => {
    //     setFormData({ ...formData, doYouTipOut: event.target.value });
    // };
    // console.log(formData.doYouTipOut)

    // const tipOutTypeOptions = tipOutTypes.map((tipOutType) => {
    //     return <option value={tipOutType}>{tipOutType.tipOutMethod}</option>
    // })

    // const handleTipOutChoiceChange = (event) => {
    //     setFormData({...formData, tipOutType: event.target.value})
    // }

    // const handleHourlyRateChoiceChange = (event) => {
    //     setFormData({...formData, hourlyRate: event.target.value})
    // }
    // console.log(formData.hourlyRate)

    // const handleProsChange = (event) => {
    //     const shouldSetValue = event.target.value.length < 255
    //     if (shouldSetValue){
    //     setFormData({...formData, pros: event.target.value})
    //     } else {
    //         setError("Comments can't be longer than 255 characters")
    //     }
    // }


    // const handleConsChange = (event) => {
    //     const shouldSetValue = event.target.value.length < 255
    //     if (shouldSetValue){
    //     setFormData({...formData, cons: event.target.value})
    //     } else {
    //     setError("Comments can't be longer than 255 characters")
    //     }
    // }

    // const handleAdditionalCommentsChange = (event) => {
    //     const shouldSetValue = event.target.value.length < 255
    //     if (shouldSetValue){
    //     setFormData({...formData, additionalComments: event.target.value})
    //     } else {
    //     setError("Comments can't be longer than 255 characters")
    //     }
    // }

    
        //The handleSubmit function is called when the form is submitted and sends the form data to a backend API using the fetch function. The setFormData function is then called to reset the form to its default values
        // const handleSubmit = async (event) => {
        // event.preventDefault();
        // const { tipOutType, doYouTipOut, text, benefits, jobType } = formData;
    
    
        // Reset form
        // setFormData({
        //     companyName: '',
        //     jobType: '',
        //     doYouTipOut: '',
        //     tipOutType: '',
        //     hourlyRate: '',
        //     pros: '',
        //     cons: '',
        //     additionalComments: ''
        // });
    // };

    return (
    <div>
    <h1>Leave your review here</h1>

        <Form onSubmit={handleSubmit} className="p-3 border rounded">


        <Form.Group>
            <Form.Label>What company are you leaving a review for?</Form.Label>
                <Form.Select  onChange={handleCompanyChoiceChange}>
                    <option value="">Please choose</option>
                    {companyOptions}
                </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>Job Title</Form.Label>
                <Form.Select  onChange={handleJobTitleChoiceChange}>
                    <option>Please choose</option>
                    {jobTypeOptions}
                </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>Do you tip out other staff members?</Form.Label>
                <Form.Select  onChange={handleDoYouTipOutChange}>
                    <option value="">Please choose</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>How do you tip out?</Form.Label>
                <Form.Select  onChange={handleTipOutChoiceChange}>
                    <option value="">Please choose</option>
                    {tipOutTypeOptions}
                </Form.Select>
        </Form.Group>
    
        <Form.Group>
            <Form.Label>What is your hourly rate?</Form.Label>
                <Form.Control type='text' ref={hourlyRateRef}></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Pros of working there</Form.Label>
            <FloatingLabel label="Tell us the good stuff">
                <Form.Control type='text' ref={prosRef}></Form.Control>
            </FloatingLabel>
        </Form.Group>

        <Form.Group>
            <Form.Label>Cons of working there</Form.Label>
            <FloatingLabel label="Tell us the not so good stuff">
                <Form.Control type='text' ref={consRef}></Form.Control>
            </FloatingLabel>
        </Form.Group>

        <Form.Group>
            <Form.Label>Any other comments you want to leave?</Form.Label>
            <FloatingLabel label="e.g. Advice for management, thoughts about uniforms...">
                <Form.Control type='text' ref={additionalCommentsRef}></Form.Control>
            </FloatingLabel>
        </Form.Group>

        <Form.Group>
            <Form.Label>What is your overall rating for this company?</Form.Label>
                <Form.Control type='text' ref={overallRatingRef}></Form.Control>
        </Form.Group>

        <input type="submit" value="Submit" />
</Form>
</div>
)
}


export default ReviewForm

