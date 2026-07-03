async function loadProfile() {
  const profileElement = document.getElementById('profile');
  profileElement.textContent = 'Loading your special message...';

  try {
    const response = await fetch('/api/profile');
    const data = await response.json();
    profileElement.innerHTML = `
      <p><strong>Sweetie</strong>, you were born on <strong>${data.birthday}</strong>.</p>
      <p>We became friends in <strong>${data.friendsSince}</strong>, and our relationship started on <strong>${data.relationshipSince}</strong>.</p>
      <p>${data.loveMessage}</p>
      <p>From <strong>${data.myName}</strong> to <strong>${data.herName}</strong>, I promise to keep loving you with all my heart.</p>
    `;
  } catch (error) {
    profileElement.textContent = 'Unable to load the profile note. Please make sure the backend server is running.';
  }
}

loadProfile();
