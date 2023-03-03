import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

function FabButton({ title, setPopup }) {
    return (
        <React.Fragment>
            <CssBaseline />
            {/* TODO: Fix theme type in GlobalStyles */}
            <div>
                <Tooltip title={title}>
                    <Fab
                        onClick={() => setPopup(true)}
                        color="primary"
                        sx={{
                            position: 'fixed',
                            bottom: (theme) => theme.spacing(2),
                            right: (theme) => theme.spacing(2),
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>

            </div>
        </React.Fragment>
    );
}

export default FabButton;