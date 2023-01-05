import * as React from "react";
import Snackbar from "@mui/material/Snackbar";


function PopUp(props) {
  const { show, message } = props

  const vertical = "top"
  const horizontal = "right"


  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}

export default React.memo(PopUp);