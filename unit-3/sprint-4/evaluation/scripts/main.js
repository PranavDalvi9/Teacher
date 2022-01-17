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
            div.onclick = (ele)=>{
             //  store(term)
               window.location.href= "news.html";
               var data = ele;
               localStorage.setItem("dataInfo",JSON.stringify("data"));
            }


        let title = document.createElement("p");
        title.innerText = ele.title;

        let desc = document.createElement("p");
        desc.innerText = ele.description

        let img = document.createElement("img");
        img.src = ele.image;

        div.append(title,img,desc)

        main.append(div);
    })

}



export { apiCall, appendArticles }