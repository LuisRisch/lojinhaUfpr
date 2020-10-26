export function userSignIn(user) {
  return {
    type: "@user/SIGN_IN",
    payload: { user },
  };
}

export function userSignOut() {
  return {
    type: "@user/SIGN_OUT",
  };
}

export function userRemember() {
  return {
    type: "@user/REMEMBER",
  };
}

export function userRefreshInfo(user) {
  return {
    type: "@user/REFRESH",
    payload: { user },
  };
}
