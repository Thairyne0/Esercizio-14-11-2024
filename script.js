// authorization: 5aoOXQCX9RFstzpVVKf6cObVP7282mHiUHKFbSX2FOuI76rwUiycdwdM
const aut = "XXXXXX";
const API_KEY = "XXXXXXX";

fetch("XXXXXX", {
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
