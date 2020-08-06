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
  })
    .then((res) => res.json())
    .then((_res) => console.log(_res));
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
    .then((_res) => {
      _id = _res;
    });
  return _id;
}
