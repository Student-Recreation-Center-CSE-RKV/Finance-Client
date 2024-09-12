export const snackbarUtil = (setMessage, triggerSnackbar, msg, type) => {
  setMessage({ msg, type });
  triggerSnackbar();
};
