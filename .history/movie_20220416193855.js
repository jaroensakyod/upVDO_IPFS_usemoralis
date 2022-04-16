let fs = require('fs');
let axios = require('axios');

let media = ["Cereal Killa - Blue Wednesday.mp4"]  //If more than one use " , " for next file.
let ipfsArray =[];
let promise = [];

for (let i = 0; i < media.length; i++){
          promise.push(
                    new Promise((res, rej) => {
                              fs.readFile(`${__dirname}/export/${media[i]}`, (err,data) => {
                                        if (err) rej();
                                        ipfsArray.push({
                                                  path: `media/${i}`,
                                                  content: data.toString("base64"),
                                        });
                                        res();
                              });
                    })
          );
}

Promise.all(promise).then(() => {
          axios.post(
                    "https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
                    ipfsArray,
                    {
                              headers: {
                                        "X-API-KEY":"Y6qHjo8QvpbOzLB5uscoitRM5bbtiqv3Gi8Mj0I1CEIIwxYTHwKnzkmiFVrssb88",
                                        "Content-type" : "application/json",
                                        accept: "application/json",

                              },
                              maxContenLength: Infinity,
                              maxBodyLength: Infinity,
                    }
          ).then((res) => {
                    console.log(res.data);
          })
          .catch((error) => {
                    console.log(error);
          });
});