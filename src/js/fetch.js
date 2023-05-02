function RunFetch(url, ind, data, nextFunction){
let path;
if (ind){
    path = `${url}/${ind}`;
}else{
    path = url
}
    fetch(path)
    .then(res=>JSON.parse(res))
    .then(res=>console.log(res))
}