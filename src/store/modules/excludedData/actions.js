export function excludeRegisterUser(user_id) {
  return {
    type: "@exclude/REGISTER_USER",
    payload: { user_id },
  };
}

export function excludeProduct({ id, title }) {
  return {
    type: "@exclude/PRODUCT",
    payload: { id, title },
  };
}

export function excludeChat({ id, title }) {
  return {
    type: "@exclude/CHAT",
    payload: { id, title },
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

export function excludeReset() {
  return {
    type: "@exclude/RESET",
  };
}
