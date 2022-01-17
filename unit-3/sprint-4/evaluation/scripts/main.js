async function apiCall(url) {


    //add api call logic here
    
    let res = await fetch (url);

    let data = await res.json();
    return data;


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach((ele) =>{
        let div = document.createElement("div");

        
    })

}

export { apiCall, appendArticles }