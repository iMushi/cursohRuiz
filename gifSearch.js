
const giphyAPI = `http://api.giphy.com/v1/gifs/search?api_key=Rb8SgnqXnK9jVtUTLHAdvjQkf3fjnj8O&q=`;
const wordAPI =  `https://random-word-api.herokuapp.com/word?number=1&key=X3K1GBVD`;


function getGif(){

    fetch(wordAPI)
        .then(transformJson)
        .then( ( [word] ) => fetch(giphyAPI + word) )
        .then( transformJson )
        .then( json => {

            const [data]= json.data;
            const { images: {fixed_height_small: url}  } = data

            const urlGet = _.get(json.data,'0.images.fixed_height_small.url');
            º
            document.getElementById('myImage').src = urlGet;
        })
        .catch( err => {
            console.log(err)
        })

}


function transformJson( response ) {
    return response.json()
}