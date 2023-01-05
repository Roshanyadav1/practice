import * as React from "react";
import Snackbar from "@mui/material/Snackbar";


function PopUp(props) {
  const { show } = props

  const vertical = "top"
  const horizontal = "right"


  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
}

export default React.memo(PopUp);