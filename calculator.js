const url = ("http://localhost:8000/")
document.addEventListener("DOMContentLoaded", () => {  
    loadDataFromServer();
    setupBtnListener();
})

async function loadDataFromServer() {
    const resp = await axios.get(url)    
    displayDataFromServer(resp.data)
}

