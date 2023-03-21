const CURRENT = "current";

function deleteCurrent() {
  localStorage.removeItem(CURRENT);
}

function getCurrentUser() {
  const currentUser = localStorage.getItem(CURRENT);
  if (!currentUser) {
    return null;
  }
  return JSON.parse(currentUser);
}

function setCurrentUser(user) {
  localStorage.setItem(CURRENT, JSON.stringify(user));
}

export { getCurrentUser, setCurrentUser, deleteCurrent };
