import React, { useState } from 'react'
import FabButton from '../../component/fab/FabButton'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Card from '../../component/card/BasicCard';
import { detail } from '../../component/card/detail';

const Projects = () => {
    const [popup, setPopup] = useState(false)

    return (
        <>
            <Grid2 display='flex' flexWrap='wrap' justifyContent='flex-start'  >
                {detail.map((e) => <Card
                    project_started={e.project_started}
                    project_title={e.project_title}
                    discription={e.discription}
                    completed={e.completed}
                />)}
                <FabButton title="Add Project" setPopup={setPopup} />
            </Grid2>

        </>
    )
}


export default Projects