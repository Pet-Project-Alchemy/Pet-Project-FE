export const SESSION_LOADING = 'SESSION_LOADING';
export const setSessionLoading = () => ({
  type: SESSION_LOADING
});

export const SESSION_DONE = 'SESSION_DONE';
export const setSessionDone = () => ({
  type: SESSION_DONE
});

export const SESSION = 'SESSION';
export const setSession = user => ({
  type: SESSION,
  payload: user
  //unsure?
});

export const SESSION_ERROR = 'SESSION_ERROR';
export const setSessionError = err => ({
  type: SESSION_ERROR,
  payload: err
});
