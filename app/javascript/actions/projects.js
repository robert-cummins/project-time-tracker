import { GET_PROJECTS } from "."


export const getProjects = (userId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${userId}/projects`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) {
        return res.json()
          .then((projectsJson) =>
            dispatch({ type: GET_PROJECTS, payload: projectsJson })
          );
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors);
        });
      }
    });
  };
};

