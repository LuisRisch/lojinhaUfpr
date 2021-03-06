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

export function userUpdateExpoToken(expoToken) {
  return {
    type: "@user/UPDATE_EXPO_TOKEN",
    payload: { expoToken },
  };
}

export function userMailVerified() {
  return {
    type: "@user/MAIL_VERIFIED",
  };
}

export function userMailChanged() {
  return {
    type: "@user/MAIL_CHANGED",
  };
}
