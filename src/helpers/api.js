export async function signUpApi(username, email, password) {
  const response = await fetch("http://localhost:3001/api/user/sign-up", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  const _response = await response.json();
  return _response;
}

export async function signInApi(email, password) {
  const response = await fetch("http://localhost:3001/api/user/sign-in", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const _response = await response.json();
  return _response;
}

export async function getUserInfoApi(token) {
  let _id = "";
  await fetch("http://localhost:3001/api/user/self", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((_res) => (_id = _res));
  return _id;
}

export function getUserScoreApi(_id) {
  let maxScore = null;
  fetch("http://localhost:3001/api/user/score", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
    }),
  })
    .then((res) => res.json())
    .then((_res) => (maxScore = _res));
  return maxScore;
}

export async function getScoreApi() {
  let data = null;
  await fetch("http://localhost:3001/api/get-score", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((_res) => (data = _res));
  return data;
}

export function setGameScoreApi(_id, score) {
  fetch("http://localhost:3001/api/put-score", {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
      score: score,
    }),
  });
}
