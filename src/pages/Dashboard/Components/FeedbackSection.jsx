import { Typography } from '@mui/material'
import React from 'react'
import Feedback from '../../../components/Feedback/Feedback';
import styles from "../dashboard.module.scss";
import { feedbacks } from '../../../data/mockData';

function FeedbackSection() {
  return (
    <div className={styles["feedback_section"]} >
        <Typography variant="h3" mb={2}>Customer's Feedback</Typography>
        <Feedback feedbacks={feedbacks} />
    </div>
  )
}

export default FeedbackSection