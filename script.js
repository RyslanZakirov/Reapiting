document.addEventListener("DOMContentLoaded", e => {

    console.log("Script is working.");

    const parseArr = (arr) => {
        return arr.map(elem => {
            return elem * (Math.random() * 100)
        })
    }

})