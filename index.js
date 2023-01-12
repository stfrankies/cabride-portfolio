const http = require('http')

const rides = [
    {
        id: 1,
        start: "ita-keskus",
        destination: "iso-omena",
        starttime: "12.00",
        stoptime: "12.30",
        payment: "visa card",
        amount: "50€",
        km: 15
    },
    {
        id: 2,
        start: "keskusta",
        destination: "malmi",
        starttime: "12.00",
        stoptime: "12.30",
        payment: "visa card",
        amount: "50€",
        km: 15
    },
    {
        id: 3,
        start: "hakaniemi",
        destination: "kamppi",
        starttime: "12.00",
        stoptime: "12.30",
        payment: "visa card",
        amount: "50€",
        km: 15
    },
    {
        id: 4,
        start: "asema-aukio",
        destination: "espoo keskusta",
        starttime: "12.00",
        stoptime: "12.30",
        payment: "visa card",
        amount: "50€",
        km: 15
    },
]

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain' })
    res.end(JSON.stringify(rides))
})

const PORT = 3001
app.listen(PORT)

console.log(`Server is running on port ${PORT}`)