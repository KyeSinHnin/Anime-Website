const comedy="comedy";
const sci="sci-fi";
const romance="romance";
const school="school";
const sports="sports";
const action="action";
const fantasy="fantasy";
const adventure="adventure";
const tragedy="tragedy";
const melodrama="melodrama";
const superN="supernatural";
const war="war";
const psythriller="psychological-thriller";

const movieInfo={
    data:[
        {id:"m1", idImg:"mi1", title:"Arrietty", genre:{fantasy,adventure,comedy}, imgLink:"./img/movies/Arrietty.jpg", link:"https://drive.google.com/file/d/164dXEVfBFYASbsVEPcENg8ij-nAfQ8FO/view"},
        {id:"m2", idImg:"mi2",title:"Ponyo", genre:{fantasy,adventure}, imgLink:"./img/movies/Ponyo.jpg", link:"https://drive.google.com/file/d/15x7cY1hjmQCRwkR42lwZcy80O9GaYcNz/view"},
        {id:"m3", idImg:"mi3",title:"Grave Of The Fireflies", genre:{melodrama,tragedy,war}, imgLink:"./img/movies/Grave Of The Fireflies.jpg", link:"https://drive.google.com/file/d/15jJ1Adxj5DRAVRgw-1qXc9wQQE34rAYL/view"},
        {id:"m4", idImg:"mi4",title:"Your Name", genre:{fantasy,romance,superN,school}, imgLink:"./img/movies/Your Name.webp", link:"https://drive.google.com/file/d/1-NZiv8mrA5xdWSLBaQyQUKgQhRXFZoLG/view"},
        {id:"m5", idImg:"mi5",title:"Princess Mononoke", genre:{fantasy,action,war}, imgLink:"./img/movies/Princess Mononoke.jpg", link:"https://drive.google.com/open?id=14pj42xljRTfMbJo8N_h6GZnXwLHbxZr5&authuser=0"},
        {id:"m6", idImg:"mi6",title:"Howl's Moving Castle", genre:{fantasy,action,romance,comedy,sci}, imgLink:"./img/movies/Howl's Moving Castle.avif", link:"https://drive.google.com/file/d/14ip4y1IQkwCZ_SVN8wsron_tmvbhPco_/view" },
        {id:"m7", idImg:"mi7",title:"Kiki's Delivery Service", genre:{fantasy,adventure,comedy}, imgLink:"./img/movies/KiKi's Delivery Service.webp", link:"https://drive.google.com/file/d/15NsgdEeti_jLJ5HprI5ypzVh0P5uc3bT/view"},
        {id:"m8", idImg:"mi8",title:"Suzume", genre:{fantasy,adventure,sci}, imgLink:"./img/movies/Suzume.webp", link:""},
        {id:"m9", idImg:"mi9",title:"Castle In The Sky", genre:{fantasy,romance,sci,superN,comedy}, imgLink:"./img/movies/Castle In The Sky.webp", link:"https://drive.google.com/file/d/15X1OlhkEeFlbEqikE9xVK0SePA_ZrbQl/view"},
        {id:"m10", idImg:"mi10",title:"Spirited Away", genre:{fantasy,superN,comedy}, imgLink:"./img/movies/Spirited Away.jpg", link:"https://drive.google.com/file/d/14eX-yjXXZnraB-TmQCYfBHxylYkgaO8j/view"},
        {id:"m11", idImg:"mi11",title:"The Cat Returns", genre:{fantasy,action,romance,comedy}, imgLink:"./img/movies/The Cat Returns.jpg", link:"https://drive.google.com/file/d/160Qf3sMfxlNgDJQujjS8y5JK6qVw8gIv/view"},
        {id:"m12", idImg:"mi12",title:"My Neighbor Totoro", genre:{fantasy,adventure,superN,comedy}, imgLink:"./img/movies/My Neighbor Totoro.webp", link:"https://drive.google.com/file/d/14bKnJuDGDTLG6ejW0i-fOPuJXYLOAlC6/view"},
        {id:"m13", idImg:"mi13",title:"Porco Rosso", genre:{romance,adventure,melodrama,comedy}, imgLink:"./img/movies/Porco Rosso.webp", link:"https://drive.google.com/file/d/17Cr2ecC2KlJcSP3eDeWmVat3oUw-J2fn/view"},
        {id:"m14", idImg:"mi14",title:"The Red Turtle", genre:{romance,adventure,fantasy}, imgLink:"./img/movies/The Red Turtle.jpg", link:"https://drive.google.com/file/d/16f3Ud6Yy90K6jRu9BZTAc_hJR42dLW2S/view"},
        {id:"m15", idImg:"mi15",title:"The Tale Of The Princess Kaguya", genre:{fantasy,tragedy}, imgLink:"./img/movies/The Tale Of The Princess Kaguya.jpg", link:""},
        {id:"m16", idImg:"mi16",title:"Tales Form Earthsea", genre:{fantasy,action,war}, imgLink:"./img/movies/Tales Form Earthsea.jpg", link:"https://drive.google.com/file/d/1-QxI6wLmJ4hIcf5QXJqMeAg3zTkmDSvc/view"},
        {id:"m17", idImg:"mi17",title:"Haikyuu !! The Movie1 : Ending and Beginning", genre:{school,sports,comedy}, imgLink:"./img/movies/Haikyuu !! The Movie 1 Ending And Beginning.jpg", link:"https://drive.google.com/file/d/12WpYjGSXGZ4oOrEHwl_2olRJRIzjJ7xL/view"},
        {id:"m18", idImg:"mi18",title:"Haikyuu !! The Movie2 : Winners and Losers", genre:{school,sports,comedy}, imgLink:"./img/movies/Haikyuu !! The Movie 2 Winner And Losers.jpg", link:"https://drive.google.com/file/d/12Z7g42FTmk3NXBbziVSFFN_tqspG2EmM/view"},
        {id:"m19", idImg:"mi19",title:"Haikyuu !! The Movie3 : Talent and Sense", genre:{school,sports,comedy}, imgLink:"./img/movies/Haikyuu !! The Movie 3 Talent And Sense.webp", link:"https://drive.google.com/file/d/12ifh67mzTHYUoz-d9_ljTxoGcMDTzGhl/view"},
        {id:"m20", idImg:"mi20",title:"Haikyuu !! The Movie4 : Battle of Concepts", genre:{school,sports,comedy}, imgLink:"./img/movies/Haikyuu !! The Movie 4 Battle Of Concepts.webp", link:"https://drive.google.com/file/d/12tEvs2xbKlwTQ3MJ9DzJ2xnk5jnr6HB8/view"},
        {id:"m21", idImg:"mi21",title:"Haikyuu !! The Dumpster Battle", genre:{school,sports,comedy}, imgLink:"./img/movies/Haikyuu !! The Dumpster Battle.jpg", link:""},
        {id:"m22", idImg:"mi22",title:"Black Bulter : Book Of Atlantic", genre:{action,fantasy,comedy,superN}, imgLink:"./img/movies/Black Bulter Book Of Atlantic.jpg", link:"https://drive.google.com/file/d/12y8ETmR6EAguCLkRnFdhRwUUwbLu0elu/view"},
        {id:"m23", idImg:"mi23",title:"Demon Slayer : The Mugen Train", genre:{adventure,action,fantasy}, imgLink:"./img/movies/Demon Slayer The Movie The Mugen Train", link:""},
    ]
}
/*
    https://drive.google.com/file/d/15iRK9eTSZoR6yPq9xvQxlYyJMJj9XLNM/view --The Wind Rise
    https://drive.google.com/file/d/15YyOGdAfYzO45nkA_ZzmJmHeKBgRKEWT/view --Whisper Of The Heart
*/

const seriesInfo={
    data:[
        {id:"s1", idImg:"si1", title:"Kaiju No. 8", genre:{sci,action,comedy}, imgLink:"img/series/Kaiju No. 8.jpg"},
        {id:"s2", idImg:"si2", title:"Mashle: Magic And Muscle", genre:{fantasy,comedy,action,school}, imgLink:"img/series/Mashle Magic And Muscle.jpg"},
        {id:"s3", idImg:"si3", title:"Wind Breaker", genre:{school,action,comedy}, imgLink:"img/series/Wind Breaker.jpg"},
        {id:"s4", idImg:"si4", title:"Oshi No Ko", genre:{superN,school}, imgLink:"img/series/Oshi No Ko.jpg"},
        {id:"s5", idImg:"si5", title:"Demon Slayer", genre:{adventure,action,fantasy}, imgLink:"img/series/Demon Slayer.webp"},
        {id:"s6", idImg:"si6", title:"Jujutsu Kaisen", genre:{school,action,fantasy,superN}, imgLink:"img/series/Jujutsu Kaisen.jpg"},
        {id:"s7", idImg:"si7", title:"Bungo Stray Dogs", genre:{comedy,action,fantasy}, imgLink:"img/series/Bungo Stray Dogs.jpg"},
        {id:"s8", idImg:"si8", title:"Haikyuu", genre:{school,sports,comedy}, imgLink:"img/series/Haikyuu.jpg"},
        {id:"s9", idImg:"si9", title:"A Sign Of Affection", genre:{romance,comedy,melodrama}, imgLink:"img/series/A Sign of Affection.jpg"},
        {id:"s10", idImg:"si10", title:"Ahiru No Sora", genre:{school,sports,comedy}, imgLink:"img/series/Ahiru No Sora.avif"},
        {id:"s11", idImg:"si11", title:"Attack On Titan", genre:{action,fantasy,adventure}, imgLink:"img/series/Attack On Titan.webp"},
        {id:"s12", idImg:"si12", title:"Black Butler", genre:{action,fantasy,comedy,superN}, imgLink:"img/series/Black Butler.jpg"},
        {id:"s13", idImg:"si13", title:"Free", genre:{school,sports,comedy}, imgLink:"img/series/Free.jpg"},
        {id:"s14", idImg:"si14", title:"Hell's Paradise", genre:{action,fantasy,psythriller}, imgLink:"img/series/Hell's Paradise.jpg"},
        {id:"s15", idImg:"si15", title:"Horimiya", genre:{romance,school}, imgLink:"img/series/Horimiya.jpg"},
        {id:"s16", idImg:"si16", title:"Kaguya Sama Love Is War", genre:{school,romance,comedy}, imgLink:"img/series/Kaguya Sama Love Is War.avif"},
        {id:"s17", idImg:"si17", title:"Kakegurui", genre:{school,psythriller}, imgLink:"img/series/Kakegurui.jpg"},
        {id:"s18", idImg:"si18", title:"Komi Can't Communicate", genre:{school,romance,comedy}, imgLink:"img/series/Komi Can't Communicate.jpg"},
        {id:"s19", idImg:"si19", title:"Kuroko's Basketball", genre:{school,sports,comedy}, imgLink:"img/series/Kuroko's Basketball.jpg"},
        {id:"s20", idImg:"si20", title:"Re-main", genre:{school,sports,comedy}, imgLink:"img/series/Re-Main.jpg"},
    ]
}

function login(){
    const login=document.getElementById("loginCon");
    login.classList.remove("none");
}
function profile(){
    const loginLabel=document.getElementById("loginLabel");
    console.log(loginLabel);
    const login=document.getElementById("loginCon");
    const nickName=document.getElementById("nickName");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const loginForm=document.getElementById("loginForm");
    const label=document.getElementById("warning");
    if(nickName.value=="" || email.value=="" || password.value==""){
        // loginForm.style.border="5px red solid";
        // loginForm.style.backgroundColor="rgba(247, 152, 152)";
       label.classList.remove("none");
    }
    else{
        loginLabel.innerText=nickName.value.toUpperCase();
        label.classList.add("none");
        login.classList.add("none");
        localStorage.setItem("nickname",nickName.value);
        console.log(localStorage);
    }
    
}

function creatMInfo(id){

   const card=document.getElementById(id);
   const info=document.createElement("div");
   const title=document.createElement("h4");
   const genre= document.createElement("div");
   const genreCon= document.createElement("div");
   const button= document.createElement("a");
   const favIcon=document.createElement("div");
   const play= document.createElement("div");
   const playIcon= document.createElement("div");
   const footerDiv=document.createElement("div");
   let currentGenre=[];
   console.log(id)
   movieInfo.data.forEach((i)=>{
    if(i.idImg==id){
        title.innerText=i.title;
        title.style.margin="0"
        info.className="info";
        genre.innerText="Genre: ";
        genre.className="genre";
        for(let g in i.genre){
            currentGenre.push(g);
            console.log(currentGenre);
        }
        for (let j=0;j<currentGenre.length;j++){
            const genreType=document.createElement("h5");
            genreType.style.margin=0;
            genreType.innerText=currentGenre[j]+'/';
            genreCon.appendChild(genreType);
           
        }
        genreCon.className="genreCon";
        button.className="button";
        play.innerText="Play";
        playIcon.innerText="play_circle";
        playIcon.className="material-symbols-outlined";
        button.href=i.link;
        favIcon.innerText="favorite";
        favIcon.className="material-symbols-outlined favIcon";
        footerDiv.className="flex";
        footerDiv.style.justifyContent="space-between"
    }
    
   })

   card.appendChild(info);
   info.appendChild(title);
   info.appendChild(genre);
   genre.appendChild(genreCon);
   info.appendChild(footerDiv);
   footerDiv.appendChild(button);
   button.appendChild(playIcon);
   button.appendChild(play);
   footerDiv.appendChild(favIcon);
}
//Series Link 
const form=document.getElementById("form");
function creatSInfo(id){
    const card=document.getElementById(id);
    const info=document.createElement("div");
    const title=document.createElement("h4");
    const genre= document.createElement("div");
    const genreCon= document.createElement("div");
    const button= document.createElement("a");
    const play= document.createElement("div");
    const playIcon= document.createElement("div");
    let currentGenre=[];
    console.log(id)
    seriesInfo.data.forEach((i)=>{
     if(i.idImg==id){
         title.innerText=i.title;
         title.style.margin="0"
         info.className="info";
         genre.innerText="Genre: ";
         genre.className="genre";
         for(let g in i.genre){
             currentGenre.push(g);
             console.log(currentGenre);
         }
         for (let j=0;j<currentGenre.length;j++){
             const genreType=document.createElement("h5");
             genreType.style.margin=0;
             genreType.innerText=currentGenre[j]+'/';
             genreCon.appendChild(genreType);
            
         }
         button.className="button";
         genreCon.className="genreCon";         
         play.innerText="Watch";
        //  playIcon.innerText="play_circle";
        //  playIcon.className="material-symbols-outlined";
       button.addEventListener("click",function(){
        console.log(i.id);
        localStorage.setItem("id",i.id);
        window.location.href="view.html";
       })
     }
     
    })
 
    card.appendChild(info);
    info.appendChild(title);
    info.appendChild(genre);
    genre.appendChild(genreCon);
    info.appendChild(button);
    // button.appendChild(playIcon);
    button.appendChild(play);
    
 }
 function view(idNo){
    console.log(idNo);
 }


// let movie_f= movieInfo.filter(isFantasy)
// const isAction=(i)=>{
//     for(let g in i.genre){
//         return i.genre[g]==action;
//     }
    
// }

// videoInfo.forEach((i)=>{
//     for(let g in i.genre){
//         if(i.genre[g]==ac){
//             console.log(i.name);break;
//         }
//         else{
//             console.log("Not",i.name)
//         }
        
//     }
// })
//movieInfo.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==action) return true})
//Search button click
function search(){
    const cards=document.querySelectorAll(".slide");
    const btnSearch=document.getElementById("btnSearch");
    btnSearch.addEventListener("click", ()=>{
        let searchInput=document.getElementById("searchInput").value;
        cards.forEach(card => {
            card.classList.add("none");
            movieInfo.data.forEach((i)=>{
                const title=i.title.toLowerCase();
                if(title.includes(searchInput.toLowerCase())){
                    console.log(i.title);
                    document.getElementById(i.id).classList.remove("none");
                }
            })
            seriesInfo.data.forEach((i)=>{
                const title=i.title.toLowerCase();
                if(title.includes(searchInput.toLowerCase())){
                    console.log(i.title);
                    document.getElementById(i.id).classList.remove("none");
                }
            })
        });
        console.log(searchInput);
        mdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));
    })
}


const isAction=(currentM)=>{
    let i=currentM.genre;
    for(let g in i){
        if(i[g]==action){
            return true;
        }
    }
}

//Slide Scroll
const initSlider = () => {
    const movies = document.querySelector(".wrapper .movies");
    const series = document.querySelector(".wrapper .series");
    const sliderButton = document.querySelectorAll(".wrapper .slide-button")
    const msliderScrollbar = document.querySelector(".movie-container .slider-scrollbar")    
    const mscrollbarThumb  = msliderScrollbar.querySelector(".scrollbar-tumb");
    const ssliderScrollbar = document.querySelector(".series-container .slider-scrollbar")    
    const sscrollbarThumb  = ssliderScrollbar.querySelector(".scrollbar-tumb");
    const maxScrollLeftofM = movies.scrollWidth - movies.clientWidth;
    const maxScrollLeftofS = series.scrollWidth - series.clientWidth;

    sliderButton.forEach((button)=>{
        button.addEventListener("click", ()=>{
            console.log(button)
            if(button.id==="mprev-slide" || button.id==="mnext-slide"){
                const direction = button.id === "mprev-slide" ? -1 : 1;
                const scrollAmount = movies.clientWidth * direction;
                movies.scrollBy({left: scrollAmount, behavior:"smooth"})
            }
            if(button.id==="sprev-slide" || button.id==="snext-slide"){
                const direction = button.id === "sprev-slide" ? -1 : 1;
                const scrollAmount = series.clientWidth * direction;
                series.scrollBy({left: scrollAmount, behavior:"smooth"})
            }
            
        })
    })

    const handleSlideButtons = ()=>{
        sliderButton[0].style.display = movies.scrollLeft <= 1 ? "none" : "block";
        sliderButton[1].style.display = movies.scrollLeft >= maxScrollLeftofM ? "none" : "block";
        sliderButton[2].style.display = series.scrollLeft <= 1 ? "none" : "block";
        sliderButton[3].style.display = series.scrollLeft >= maxScrollLeftofS ? "none" : "block";
        console.log(series.scrollLeft);
    }

    //Scrollbar thumb position on button
    const mscrollTumbPosition=()=>{
        const scrollPosition = movies.scrollLeft;
        const tumbPostion = (scrollPosition / maxScrollLeftofM) * (msliderScrollbar.clientWidth - mscrollbarThumb.offsetWidth)
        mscrollbarThumb.style.left = `${tumbPostion}px`;
    }
    const sscrollTumbPosition=()=>{
        const scrollPosition = series.scrollLeft;
        const tumbPostion = (scrollPosition / maxScrollLeftofS) * (ssliderScrollbar.clientWidth - sscrollbarThumb.offsetWidth)
        sscrollbarThumb.style.left = `${tumbPostion}px`;
    }
    
    movies.addEventListener("scroll", ()=>{
        handleSlideButtons();
        mscrollTumbPosition();
    })

    series.addEventListener("scroll", ()=>{
        handleSlideButtons();
        sscrollTumbPosition();
    })
}



window.addEventListener("load",initSlider)


//parameter passed form button(Prarameter same as genre)
function filterGenre(value){
    //button class
    const buttons = document.querySelectorAll(".genre-element");
    buttons.forEach((button)=>{
        //check if value equals innerText
        
        if(value.toLowerCase() == button.innerText.toLowerCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
        
    })
    const cards=document.querySelectorAll(".slide");
    const backImgCon=document.querySelector(".backImgCon");
    const genreBar=document.querySelector(".genre-bar");
    const mainInner=document.querySelector(".mainInner");
    cards.forEach((card) =>{
        //slide up
        backImgCon.classList.add("slide-up-animation");
        genreBar.classList.add("slide-up-animation-genre");
        genreBar.style.position="fixed";
        mainInner.classList.add("slide-up-animation","change-form");
        console.log(value);
        switch(value){
        case 'all': {
            card.classList.remove("none");
            mainInner.classList.remove("change-form");
            break;
        }
        case 'comedy': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==comedy) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==comedy) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'action': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==action) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==action) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'adventure': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==adventure) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==adventure) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'romance': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==romance) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==romance) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'fantasy': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==fantasy) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==fantasy) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'school': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==school) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==school) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'sci-fi': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==sci) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==sci) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'sports': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==sports) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==sports) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'tragedy': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==tragedy) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==tragedy) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'melodrama': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==melodrama) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==melodrama) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'supernatural': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==superN) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==superN) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'war': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==war) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==war) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        case 'psychological-thriller': {
            card.classList.add("none");
            const comdeyM=movieInfo.data.filter(currentM=>{for (let g in currentM.genre) if (currentM.genre[g]==psythriller) return true});
            comdeyM.forEach((i) => document.getElementById(i.id).classList.remove("none"));
            const comdeyS=seriesInfo.data.filter(currentS=>{for (let g in currentS.genre) if (currentS.genre[g]==psythriller) return true});
            comdeyS.forEach((i) => document.getElementById(i.id).classList.remove("none"));break;
        }
        
    }
    })
}

//initially display all movies and series
const movieCon=document.querySelector(".wrapper .movies");
const seriesCon=document.querySelector(".wrapper .series");

window.onload = () =>{
    const login=document.getElementById("loginCon");
    const label=document.getElementById("warning");
    label.classList.add("none");
    localStorage.removeItem("id");
    console.log("Onload start");
    for(let i=1;i<=movieInfo.data.length;i++){
        creatMInfo("mi"+i);
    }
    for(let i=1;i<=seriesInfo.data.length;i++){
        creatSInfo("si"+i);
    }
    console.log("Onload");
    search();
    login.classList.add("none");
}



