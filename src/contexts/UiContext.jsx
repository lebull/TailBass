import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState, createContext } from "react";

const UiContext = createContext();

const UiProvider = ({ children }) => {
  const [uiState, setUiState] = useState({});

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
  });

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  };

  const openSnackbar = (message) => {
    setSnackbarState({
      ...snackbarState,
      open: true,
      message,
    });
  };

  return (
    <UiContext.Provider value={{ uiState, setUiState, openSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbarState.open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message={snackbarState.message}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={closeSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </UiContext.Provider>
  );
};

export { UiContext, UiProvider };
