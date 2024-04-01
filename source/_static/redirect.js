window.addEventListener("beforeunload", (event) => {
    
    event.preventDefault();    
    event.returnValue = "";
    
    const url = window.location;
    const loc = url.pathname;
    const q = url.search.substr(1);

    console.log(url)

  });