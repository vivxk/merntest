const http = require("http");
const axios = require("axios").default;


const hostname = "127.0.0.1";
const port = 3000;

async function getData() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        );
        return response;
    } catch (error) {
        console.error(error);
    }
}

const server = http.createServer((req, res) => {


    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(response.data));
        })
        .catch((err) => console.log(err));

});

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
});
