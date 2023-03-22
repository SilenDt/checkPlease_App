import { Button, Container, Form, Card } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import React, { useRef, useState } from 'react'
import { updateUser } from "../../services/UserServices"
import { useNavigate } from "react-router-dom"
import { updateReview } from "../../services/ReviewService"

export default function UpdateReview({ userDetailsByUid }) {
    const { currentUser, setCurrentUser } = useAuth()
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

    const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`

    //WRITE UPDATEREVIEW IN SERVICES

    async function handleUpdateSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
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
            await updateReview(currentUser.uid, reviewDetails)
            //later change to navigate to their profile
            navigate("/")
        } catch {
            setError("failed to update user details")
        }
        setLoading(false)
    }





}
