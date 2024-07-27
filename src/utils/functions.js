let interval = null;

export const isTokenValid = (exp) => {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval((exp) => {
        const time = new Date()
        const currentTimestamp = Date.parse(time)/1000
        if (currentTimestamp > exp) {
            console.log("hemos entrado al if")
            localStorage.removeItem("fullToken")
            clearInterval(interval)

        }
    }, 60000)
}