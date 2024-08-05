import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./feedback.module.scss";

function Feedback(props) {
    return (
        <>
            {props.feedbacks.map((feedback,index) => (
                <div key={index} className={styles["feedback_section"]}>
                    <Box display="flex" alignItems="center" gap={1} mb={.5}>
                        <Avatar src={feedback.img} />
                        <Typography variant="subtitle1">
                            {feedback.name}
                        </Typography>
                    </Box>
                    <Rating
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={feedback.rating}
                        readOnly
                    />
                    <Typography variant="body1">{feedback.comment}</Typography>
                </div>
            ))}
        </>
    );
}

export default Feedback;
