import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewForm = ()=> {
    //Initialize form state with useState:
    //The useState hook returns an array containing the current state value and a function to update the state
    const [formState, setFormState] = useState({
        tipOutMultipleChoichDropdown: '',
        yesOrNo: '',
        shortAnswer: '',
        multipleAnswers: [],
        jobTitletMultipleChoichDropdown: '',
    });

    // Event handlers:
    // Each input field has an event handler function associated with it that updates the corresponding property in the formState object

    //the handleMultipleChoiceChange function is called when the value of the select input field changes and updates the multipleChoice property in the formState object
    const handleTipOutMultipleChoiceChange = (event) => {
        setFormState({ ...formState, tipOutMultipleChoichDropdown: event.target.value });
    }; 

    const handleJobTitleChoiceChange = (event) => {
        setFormState({ ...formState, jobTitletMultipleChoichDropdown: event.target.value });
    }; 
    
    const handleYesOrNoChange = (event) => {
        setFormState({ ...formState, yesOrNo: event.target.value });
    };
    
    const handleShortAnswerChange = (event) => {
        setFormState({ ...formState, shortAnswer: event.target.value });
    };

    //handleMultipleAnswersChange:
    //When called with an event
    const handleMultipleAnswersChange = (event) => {
    // Get current options array from formState.multipleAnswers
        const options = formState.multipleAnswers;
    // Get index of event.target.value in options array
        const index = options.indexOf(event.target.value);
        // If event.target.checked:
        if (event.target.checked) {
            //   Push event.target.value onto options array
            options.push(event.target.value);
        
        //Else: Remove event.target.value from options array using splice
        } else {
            options.splice(index, 1);
        }
         // Call setFormState with a new object that merges the previous state with the updated multipleAnswers property
        setFormState({ ...formState, multipleAnswers: options });
    };
    
        //The handleSubmit function is called when the form is submitted and sends the form data to a backend API using the fetch function. The setFormState function is then called to reset the form to its default values
        const handleSubmit = async (event) => {
        event.preventDefault();
        const { tipOutMultipleChoichDropdown, yesOrNo, shortAnswer, multipleAnswers, jobTitletMultipleChoichDropdown } = formState;
    
        // Send data to backend API
        await fetch('/api/questions', {
            method: 'POST',
            body: JSON.stringify({
            tipOutMultipleChoichDropdown,
            yesOrNo,
            shortAnswer,
            multipleAnswers,
            jobTitletMultipleChoichDropdown,
        }),
        headers: {
            'Content-Type': 'application/json',
            },
        });
    
        // Reset form
        setFormState({
        tipOutMultipleChoichDropdown: '',
        yesOrNo: '',
        shortAnswer: '',
        multipleAnswers: [],
        jobTitletMultipleChoichDropdown,
        });
    };

    
    return (
    <div>
    <h1>This is a review form3</h1>

        <form onSubmit={handleSubmit} className="p-3 border rounded">

{/* What was your job title at the company? */}
    <div className="form-group">
        <label htmlFor="jobTitleMultipleChoichDropdown">What was your job title at the company?</label>
        <select id="jobTitletMultipleChoichDropdown" className="form-control" value={formState.jobTitletMultipleChoichDropdown} onChange={handleJobTitleChoiceChange}>
            <option value="">Select an option</option>
            <option value="server">Server</option>
            <option value="bartender">Bartender</option>
            <option value="cook">Cook</option>
            <option value="dishwasher">Dishwasher</option>
            <option value="busser">Busser</option>
        </select>
    </div>

{/* Do you tip out other staff members? */}
            <div className="form-group">
                <label>Do you tip out other staff members?</label>
                <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="yesOrNo" value="Yes" checked={formState.yesOrNo === 'Yes'} onChange={handleYesOrNoChange} />
                    Yes
                </label>
                </div>
                <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="yesOrNo" value="No" checked={formState.yesOrNo === 'No'} onChange={handleYesOrNoChange} />
                    No
                </label>
                </div>
            </div>

{/* How do you tip out? */}
    <div className="form-group">
        <label htmlFor="tipOutMultipleChoichDropdown">How do you tip out?</label>
        <select id="tipOutMultipleChoichDropdown" className="form-control" value={formState.tipOutMultipleChoichDropdown} onChange={handleTipOutMultipleChoiceChange}>
            <option value="">Select an option</option>
            <option value="Option 1">A percentage of your total tips</option>
            <option value="Option 2">A percentage of your total sales</option>
            <option value="Option 3">A fixed amount</option>
            <option value="Option 3">At your own discretion</option>
            <option value="Option 3">I don't tip out</option>
        </select>
    </div>

{/* What benefits do you recieve? */}
        <div>
            <label htmlFor="multipleAnswers">What benefits do you recieve?</label>
                <div>
                    <label htmlFor="option1">
                        <input type="checkbox" id="option1" name="multipleAnswers" value="Option 1" onChange={handleMultipleAnswersChange} />
                        Staff Meal
                    </label>
                </div>
                <div>
                    <label htmlFor="option2">
                        <input type="checkbox" id="option1" name="multipleAnswers" value="Option 1" onChange={handleMultipleAnswersChange} />
                        Employee Food Discount
                    </label>
                </div>
                <div>
                    <label htmlFor="option3">
                        <input type="checkbox" id="option1" name="multipleAnswers" value="Option 1" onChange={handleMultipleAnswersChange} />
                        Friends and Family Discount
                    </label>
                </div>
                <div>
                    <label htmlFor="option4">
                        <input type="checkbox" id="option1" name="multipleAnswers" value="Option 1" onChange={handleMultipleAnswersChange} />
                        Health Insurance
                    </label>
                </div>
                <div>
                    <label htmlFor="option5">
                        <input type="checkbox" id="option1" name="multipleAnswers" value="Option 1" onChange={handleMultipleAnswersChange} />
                        Tips
                    </label>
                </div>


{/* Add comments about your experience: */}
        <div className="form-group">
            <label htmlFor="shortAnswer">Any other comments about your experience:</label>
                <input type="text" id="shortAnswer" className="form-control" value={formState.shortAnswer} onChange={handleShortAnswerChange} />
        </div>

        </div>
        <input type="submit" value="Submit" />
</form>
</div>
)
}

export default ReviewForm

