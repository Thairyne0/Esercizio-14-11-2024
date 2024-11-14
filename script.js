// authorization: 5aoOXQCX9RFstzpVVKf6cObVP7282mHiUHKFbSX2FOuI76rwUiycdwdM
const aut = "5aoOXQCX9RFstzpVVKf6cObVP7282mHiUHKFbSX2FOuI76rwUiycdwdM";
const API_KEY = "ayRAraaqUW3F0iycASQJRiZMaiKrsWL1Mzv1Xt4l31xsB0ipFkx1xFsp";

fetch("https://api.pexels.com/v1/search?query=galaxy", {
  method: "GET",
  headers: {
    Authorization: API_KEY,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    console.log("response", response);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore nella chiamata");
    }
  })
  .then((dati) => {
    console.log("DATES", dati);
  })
  .catch((error) => {
    console.log(error);
  });
