import React, { useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import FabButton from '../../component/fab/FabButton';

const Tasks = () => {
    const [popup, setPopup] = useState(false)
    return (
        <>
            <Grid2>
                Tasks

                <FabButton title="Add Task" setPopup={setPopup} />
            </Grid2>
        </>
    )
}


export default Tasks;