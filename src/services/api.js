const API_BASE_URL = 'https://your-api-url.com/api';

export async function loginUser ({ email, password }) {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }

  const data = await res.json();
  return data.token; // assuming backend returns { token: '...' }
}

// Add other API calls similarly
export async function registerUser({ name, email, password, role }) {
  const res = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  return await res.json(); // or return token if your backend sends one
}


export async function getUserProfile(token) {
  const res = await fetch(`${API_BASE_URL}/profile`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Failed to fetch profile');
  return await res.json();
}

export async function updateUserProfile(token, updatedData) {
  const res = await fetch(`${API_BASE_URL}/profile`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error('Failed to update profile');
  return await res.json();
}