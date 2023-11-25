

    const url = "https://dummyjson.com/quotes"
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('Network error');
        }
        
        return response.json();
    })

    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

 