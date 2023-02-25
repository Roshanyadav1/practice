import React from "react";
import { DrawerHeader } from "../../component/navbar/Navbar";
import { Box } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Dashboard = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Grid2>
                grid view
            </Grid2>
        </Box>
    )
}

export default Dashboard