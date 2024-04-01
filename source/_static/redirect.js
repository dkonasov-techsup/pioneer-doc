window.addEventListener("beforeunload", (event) => {
    
    event.preventDefault();    
    event.returnValue = "";
    
    const url = window.location;
    const loc = url.pathname;
    const q = url.search.substr(1);

    if(loc == "pioneer-doc.readthedocs.io/ru/master/index.html"){
      window.location.href = "docs.geoscan.ru/pioneer/";
    }
    else{
      console.log('rdr error')
    }

  });