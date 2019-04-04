const getEntries = ()  => { // returns all the entries as an array of objects
    return fetch("http://localhost:8088/entries")
           .then(r => r.json())
        
    }




    const saveEntries = (newEntries) => {  // saves each entry and store in the api
        return fetch("http://localhost:8088/entries", {
          method: "POST",
          body: JSON.stringify(newEntries),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(r => r.json())
      }