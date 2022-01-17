function storeSearchterm(term) {

     
    let res = await fetch (term);

    let data = await res.json();
    return data;

}

export default storeSearchterm