export function refreshCategories(categories) {
  return {
    type: "@categories/REFRESH",
    payload: { categories },
  };
}
