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
        div.addEventListener("onclick",detail(ele))


        let title = document.createElement("p");
        title.innerText = ele.title;

        let img = document.createElement("img");
        img.src = ele.image;

        div.append(title, img)

        main.append(div);
    })

}


function detail(ele){
    console.log("here")
}

export { apiCall, appendArticles }