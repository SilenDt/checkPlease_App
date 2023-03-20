import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getJobTypesInfo } from '../../services/JobTypeServices';
import { FloatingLabel, Form } from 'react-bootstrap'

const ReviewForm = ({jobTypes, companiesInfo, tipOutTypes})=> {
    //Initialize form state with useState:
    //The useState hook returns an array containing the current state value and a function to update the state
    const [formData, setFormData] = useState(
        {
            companyName: '',
            jobType: '',
            doYouTipOut: '',
            tipOutType: '',
            hourlyRate: '',
            pros: '',
            cons: '',
            additionalComments: ''
        }
    );


    // THIS OPTION DOES NOT HAVE A VALUE
    const companyOptions = companiesInfo.map((company) => {
        return <option>{company.name}</option>
    })

    const handleCompanyChoiceChange = (event) => {
        setFormData({...formData, companyName: event.target.value})
    }
    // console.log(formData.companyName)

    const jobTypesOptions = jobTypes.map((jobType) => { 
        return <option value={jobType}>{jobType.jobRole}</option>
    })

    const handleJobTitleChoiceChange = (event) => {
        setFormData({ ...formData, jobType: event.target.value });
    };
    
    const handleDoYouTipOutChange = (event) => {
        setFormData({ ...formData, doYouTipOut: event.target.value });
    };
    // console.log(formData.doYouTipOut)

    const tipOutTypeOptions = tipOutTypes.map((tipOutType) => {
        return <option value={tipOutType}>{tipOutType.tipOutMethod}</option>
    })

    const handleTipOutChoiceChange = (event) => {
        setFormData({...formData, tipOutType: event.target.value})
    }

    const handleHourlyRateChoiceChange = (event) => {
        setFormData({...formData, hourlyRate: event.target.value})
    }
    console.log(formData.hourlyRate)

    const handleProsChange = (event) => {
        setFormData({...formData, pros: event.target.value})
    }

    const handleConsChange = (event) => {
        setFormData({...formData, cons: event.target.value})
    }

    const handleAdditionalCommentsChange = (event) => {
        setFormData({...formData, additionalComments: event.target.value})
    }

    
        //The handleSubmit function is called when the form is submitted and sends the form data to a backend API using the fetch function. The setFormData function is then called to reset the form to its default values
        const handleSubmit = async (event) => {
        event.preventDefault();
        const { tipOutType, doYouTipOut, text, benefits, jobType } = formData;
    
    
        // Reset form
        setFormData({
        tipOutType: '',
        doYouTipOut: '',
        text: '',
        benefits: [],
        jobType,
        });
    };

    return (
    <div>
    <h1>Leave your review here</h1>

        <form onSubmit={handleSubmit} className="p-3 border rounded">


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
                    <option value="">Please choose</option>
                    {jobTypesOptions}
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
                <Form.Control type='text' onChange={handleHourlyRateChoiceChange}></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Pros of working there</Form.Label>
            <FloatingLabel label="Tell us the good stuff">
                <Form.Control type='text' onChange={handleProsChange}></Form.Control>
            </FloatingLabel>
        </Form.Group>

        <Form.Group>
            <Form.Label>Cons of working there</Form.Label>
            <FloatingLabel label="Tell us the not so good stuff">
                <Form.Control type='text' onChange={handleConsChange}></Form.Control>
            </FloatingLabel>
        </Form.Group>

        <Form.Group>
            <Form.Label>Any other comments you want to leave?</Form.Label>
            <FloatingLabel label="e.g. Advice for management, thoughts about uniforms...">
                <Form.Control type='text' onChange={handleAdditionalCommentsChange}></Form.Control>
            </FloatingLabel>
        </Form.Group>

        <input type="submit" value="Submit" />
</form>
</div>
)
}


export default ReviewForm

