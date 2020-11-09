export function excludeRegisterUser(user_id) {
  return {
    type: "@exclude/REGISTER_USER",
    payload: { user_id },
  };
}

export function excludeProduct(id) {
  return {
    type: "@exclude/PRODUCT",
    payload: { id },
  };
}

export function excludeChat(id) {
  return {
    type: "@exclude/CHAT",
    payload: { id },
  };
}

export function restoreProduct(id) {
  return {
    type: "@exclude/RESTORE_PRODUCT",
    payload: { id },
  };
}

export function restoreChat(id) {
  return {
    type: "@exclude/RESTORE_CHAT",
    payload: { id },
  };
}

export function excludeReset(id) {
  return {
    type: "@exclude/RESET",
    payload: { id },
  };
}
