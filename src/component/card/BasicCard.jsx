import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgressBar from '../progress/ProgressBar';


function BasicCard({
    project_started,
    project_title,
    discription,
    completed,
}) {
    return (
        <Card sx={{ minWidth: 325, margin: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {project_started}
                </Typography>
                <Typography variant="h5" component="div">
                    {project_title}
                </Typography>
                <Typography variant="body2">
                    {discription}
                </Typography>

                {/* Progress bar ! how much project completed */}
            </CardContent>
            <Typography paddingLeft={2} color='primary' variant="body2">
                completed
            </Typography>
            <ProgressBar completed={completed} />

            <CardActions>
                <Button size="small">View Tasks</Button>
            </CardActions>
        </Card>
    );
}

export default BasicCard
