
export const getGifs = async ( category ) => {

        console.log("getting " + category);

        if(category !== undefined)
        {

            const url = "https://api.giphy.com/v1/gifs/search?q=" + encodeURI(category) + "&limit=10&api_key=OnakoJNA0dYdhDtp3vzIXkfzf6qpXp0p";
            const resp = await fetch(url);
            const {data} = await resp.json();

            const gifs = data.map( img => {
                return {
                    id:     img.id,
                    title:  img.title,
                    url:    img.images?.downsized_medium.url
                }
            })
            
            return( gifs );
        }
        return( [] );
    }
