

document.querySelector("#buyBtn").addEventListener("click", async () => {
    const response = await fetch(`http://localhost:8080?buyCount=${document.querySelector("#buyCount").value}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',                                                                                                   
      }
      )
      if (window.confirm(response))
            {
                location.reload()
            }
});