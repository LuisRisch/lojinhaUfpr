export function chatSave(data, id) {
  return {
    type: "@chat/SAVE_CURRENT",
    payload: { data, id },
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
