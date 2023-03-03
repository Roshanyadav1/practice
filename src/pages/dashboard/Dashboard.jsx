import React from "react";
import { DrawerHeader } from "../../component/navbar/Navbar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Projects from "../projects/Projects";
import Tasks from "../tasks/Tasks";

const Dashboard = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

            <Routes>
                <Route path="*" element={<Projects />} />
                <Route path="tasks" element={<Tasks />} />
            </Routes>
        </Box>
    )
}

export default Dashboard