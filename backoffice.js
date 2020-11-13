window.onload= async()=>{
    const url="https://striveschool-api.herokuapp.com/api/movies/";
    let urlParams = new URLSearchParams(window.location.search);
    elements= urlParams.get("id");
    element = elements.split("|");
    id= element[0];
    category= element[1];
    console.log(id, category);

    if(id){
        try{
            let response = await fetch(url+category,{
                method:"GET",
                headers: new Headers({
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY",
                }),
            });
            let movie = await response.json();
            console.log(movie);
            let film = movie.find(o => o._id === id);
            console.log(film);
            document.querySelector("#name").value= film.name
            document.querySelector("#description").value= film.description;
            document.querySelector("#category").value=film.category;
            document.querySelector("#image").value=film.imageUrl;
        }catch(error){
            console.log(error);
        }
    }
}


const handleSubmit=(e)=>{
    e.preventDefault();
    postMovie();
    document.querySelector("#name").value="";
    document.querySelector("#description").value="";
    document.querySelector("#category").value="";
    document.querySelector("#image").value="";
}

async function postMovie(){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";

    let myMovie = {
        "name": document.querySelector("#name").value,
        "description":  document.querySelector("#description").value,
        "category": document.querySelector("#category").value,
        "imageUrl": document.querySelector("#image").value,
    }

    console.log(myMovie);

     try{
         let response = await fetch(url,{
             method: "POST",
             body: JSON.stringify(myMovie),
             headers: new Headers({
                 "Content-type": "application/json",
                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY"
             }),
         });
         if(response.ok){
             alert("success");
             location.assign("index.html");
         }else{
             alert("fail")
         }
     }catch(e){
         console.log(e);
     }
};




async function updateMovie(){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let urlParams = new URLSearchParams(window.location.search);
    elements= urlParams.get("id");
    element = elements.split("|");
    id= element[0];
    category= element[1];


    let myMovie ={
        "name": document.querySelector("#name").value,
        "description":  document.querySelector("#description").value,
        "category": document.querySelector("#category").value,
        "imageUrl": document.querySelector("#image").value,
    }

    try{
        let response = await fetch(url+id,{
            method: "PUT",
            body: JSON.stringify(myMovie),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY"
            }),
        });
        if(response.ok){
            alert("updated successfully");
            location.assign("index.html");
        }else{
            alert("fail")
        }
    }catch(e){
        console.log(e);
    }
};


const handleDelete= async()=>{
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let urlParams = new URLSearchParams(window.location.search);
    elements= urlParams.get("id");
    element = elements.split("|");
    id= element[0];
    category= element[1];
    
    try{
        let response = await fetch(url+id,{
            method: "DELETE",
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY"
            }),
        });
        if(response.ok){
            alert("deleted successfully");
            location.assign("index.html");
        }else{
            alert("fail")
        }
    }catch(e){
        console.log(e);
    }
}