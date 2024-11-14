// authorization: 5aoOXQCX9RFstzpVVKf6cObVP7282mHiUHKFbSX2FOuI76rwUiycdwdM
const aut = "5aoOXQCX9RFstzpVVKf6cObVP7282mHiUHKFbSX2FOuI76rwUiycdwdM";

fetch("https://api.pexels.com/v1/search?query=123", {
  method: "GET",
  headers: {
    Authorization: aut,
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
