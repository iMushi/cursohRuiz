
const giphyAPI = `http://api.giphy.com/v1/gifs/search?api_key=Rb8SgnqXnK9jVtUTLHAdvjQkf3fjnj8O&q=`;
const wordAPI =  `https://random-word-api.herokuapp.com/word?number=1&key=1JT6LE1H`;


function getGif(){

    fetch(wordAPI)
        .then(transformJson)
        .then( ( [word] ) => fetch(giphyAPI + word) )
        .then( transformJson )
        .then( json => {

            const [data]= json.data;
            const { images: {fixed_height_small: url}  } = data

            const urlGet = _.get(json.data,'0.images.fixed_height_small.url');

            document.getElementById('myImage').src = urlGet;
        })
        .catch( err => {
            console.log(err)
        })

}

function transformJson( response ) {
    return response.json()
}


function obten3Imagenes(){

    const promiseJar = [
        asyncGetGif(),
        asyncGetGif(),
        asyncGetGif()
]

    Promise.all(promiseJar).then(
        ([primera, segunda, tercera])=> {


            const urlGetPrimera = _.get(primera.data,'0.images.fixed_height_small.url');
            const urlGetSegunda = _.get(segunda.data,'0.images.fixed_height_small.url');
            const urlGetTercera = _.get(tercera.data,'0.images.fixed_height_small.url');

            document.getElementById('myImagePrimera').src = urlGetPrimera;
            document.getElementById('myImageSegunda').src = urlGetSegunda;
            document.getElementById('myImageTercera').src = urlGetTercera;



        }
    )

}


async function asyncGetGif(){

    const wordAPIResult = await fetch(wordAPI)
    const [word] = await wordAPIResult.json()

    const  giphyResult = await fetch(giphyAPI + word);
    return giphyResult.json();
}
