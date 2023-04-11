const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;
 
app.use(cors());
app.use(express.json());
 
app.post("/compile", (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;
 
    if (language === "python") {
        language="py"
    }
 
    var data = ({
        "code": code,
        "language": language,
        "input": input
    });
    // var data = ({
    //     'code': 'val = int(input("Enter your value: ")) + 5\nprint(val)',
    //     'language': 'py',
    //     'input': '7'
    // });
    var config = {
        method: 'post',
        // url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    //calling the code compilation API
    // Axios(config)
    //     .then((response)=>{
    //         res.send(response.data)
    //         console.log(response.data)
    //     }).catch((error)=>{
    //         console.log(error);
    //     });

    Axios(config)
  .then(function (response) {
    res.send(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
})
 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
 