export function chatSave(data) {
  return {
    type: "@chat/SAVE_CURRENT",
    payload: { data },
  };
}

export function newMessage(data) {
  return {
    type: "@chat/MESSAGE",
    payload: { data },
  };
}

export function chatLeave() {
  return {
    type: "@chat/LEAVE",
  };
}
