async function getMovie(genre){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let movieContainer= document.querySelector(".movieContainer");

    try{
        let response = await fetch(url+genre, {
            method:"GET",
            headers: new Headers({
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY",
            }),
        });
        let horrorMovies= await response.json();
       //console.log(movies);
       if(horrorMovies.length>0){
           horrorMovies.forEach(e => {
            let col= document.createElement("div");
            col.classList.add("col-sm-12",
            "col-md-6",
            "col-lg-2",
            "mx-auto",
            "text-center",
            "single-col"
            
            );
            col.innerHTML= `
            <div class="col-film">
            <img src=${e.imageUrl} class="img-fluid">
            <a href="backoffice.html?id=${e._id}|${e.category}" style="color:#fff"><p class="film-title">${e.name}</p></a>
            <a href="detail.html?id=${e.title}|${e.category}|${e.description}|${e.imageUrl}" class="film-details" style="color:#fff"><p class="film-details">See more..</p></a>
            </div>
         `
         movieContainer.appendChild(col);
           });
       }else{
           movieContainer.innerHTML ="<h1>No movies here for the moment</h1>";
       }

    }
    catch(e){
        console.log(e);
        alert(e);
    }
}
getMovie("horror");


async function getSerie(){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let seriesContainer= document.querySelector(".seriesContainer");

    try{
        let response = await fetch(url+"series", {
            method:"GET",
            headers: new Headers({
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY",
            }),
        });
        let series= await response.json();
       // console.log(movies);
       if(series.length>0){
           series.forEach(e => {
            let col= document.createElement("div");
            col.classList.add("col-sm-12",
            "col-md-6",
            "col-lg-2",
            "mx-auto",
            "text-center",
            "col-song",
            );
            col.innerHTML= `
            <div class="col-film">
            <img src=${e.imageUrl} class="img-fluid">
            <a href="backoffice.html?id=${e._id}|${e.category}" style="color:#fff"><p class="film-title">${e.name}</p></a>
            <a href="detail.html?id=${e.title}|${e.category}|${e.description}|${e.imageUrl}" class="film-details" style="color:#fff"><p class="film-details">See more..</p></a>
            </div>
         `
         seriesContainer.appendChild(col);
           });
       }else{
           seriesContainer.innerHTML ="<h1>No series here for the moment</h1>";
       }

    }
    catch(e){
        console.log(e);
        alert(e);
    }
}
getSerie();



async function getFantasyMovie(){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let fantasyContainer= document.querySelector(".fantasyContainer");

    try{
        let response = await fetch(url+"fantasy", {
            method:"GET",
            headers: new Headers({
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNTQ0YWFkOGMzODAwMTc1YTMxY2YiLCJpYXQiOjE2MDUyNjAzNjIsImV4cCI6MTYwNjQ2OTk2Mn0.Qe51Dg0cpT3EV5GhnBW7AtIG0OelpjrPj-4xtzNSrxY",
            }),
        });
        let series= await response.json();
       // console.log(movies);
       if(series.length>0){
           series.forEach(e => {
            let col= document.createElement("div");
            col.classList.add("col-sm-12",
            "col-md-6",
            "col-lg-2",
            "mx-auto",
            "text-center",
            "col-song2",
            );
            col.innerHTML= `
            <div class="col-film">
            <img src=${e.imageUrl} class="img-fluid">
            <a href="backoffice.html?id=${e._id}|${e.category}" style="color:#fff"><p class="film-title">${e.name}</p></a>
            <a href="detail.html?id=${e.title}|${e.category}|${e.description}|${e.imageUrl}" class="film-details" style="color:#fff"><p class="film-details">See more..</p></a>
            </div>
         `
         fantasyContainer.appendChild(col);
           });
       }else{
        fantasyContainer.innerHTML ="<h1>No series here for the moment</h1>";
       }

    }
    catch(e){
        console.log(e);
        alert(e);
    }
}
getFantasyMovie();
