window.onload= async()=>{
    const url="https://striveschool-api.herokuapp.com/api/movies/";
    let urlParams = new URLSearchParams(window.location.search);
    id= "horror";
    if(id){
        try{
            let response = await fetch(url+id,{
                method:"GET",
                headers: new Headers({
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY",
                }),
            });
            let movie = await response.json();
            console.log(movie);
            document.querySelector("#name").value= movie.name
            document.querySelector("#description").value= movie.description;
            document.querySelector("#category").value=movie.category;
            document.querySelector("#image").value=movie.imageUrl;
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
 
 let success= document.querySelector(".success");
 let errorAlert= document.querySelector(".error");

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
         }else{
             alert("fail")
         }
     }catch(e){
         console.log(e);
     }
};


