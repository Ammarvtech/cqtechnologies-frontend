import React, { useState, useEffect, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackAlert = ({ alertInfo }) => {
  const { type, msg } = alertInfo;
  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    if (type !== "" && Object.keys(alertInfo).length > 0) {
      setOpen(true);
    }
  }, [type]);
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={type}
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default SnackAlert;
