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

const seriesInfo={
    data:[
        /*s1*/{
            id:"s1", 
            season:[["https://shorturl.at/bGEnu","https://shorturl.at/c4C0N","https://shorturl.at/0E1ja","https://shorturl.at/1qImW","https://shorturl.at/OZiLy","bit.ly/3P6Abxf","","","","","",""]], 
            idImg:"si1", 
            title:"Kaiju No. 8", 
            genre:{sci,action,comedy}, 
            imgLink:"img/series/Kaiju No. 8.jpg", 
            preview:"A man working a job far removed from his childhood dreams gets wrapped up in an unexpected situation...!. Becoming a monster, he aims once again to fulfill his lifelong dream...!.", 
            videolink:"videos/Kaiju No. 8 - 4K Sakuga Highlights Episodes 7, 8, 9.mp4"
        },
        /*s2*/{
            id:"s2", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","",""]], 
            idImg:"si2", 
            title:"Mashle: Magic And Muscle", 
            genre:{fantasy,comedy,action,school}, 
            imgLink:"img/series/Mashle Magic And Muscle.jpg",
            preview:"Into a world of magicians is born Mash, a young boy who lacks magic but is the strongest person around. His existence and destiny will change his world",
            videolink:"videos/Mash Entrance Exam.mp4"
        },
        /*s3*/{
            id:"s3", 
            season:[["","","","","","","","","","","","",""]], 
            idImg:"si3", 
            title:"Wind Breaker", 
            genre:{school,action,comedy}, 
            imgLink:"img/series/Wind Breaker.jpg",
            preview:"From an early age, Haruka Sakura was an outcast due to his unconventional appearance and lack of social skills. However, the harsh treatments he received made him a skilled fighter, which is now the only thing he prides himself on.",
            videolink:"videos/Haruka Sakura protect Kotoha from Gangster! .mp4"
        },
        /*s4*/ {
            id:"s4", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","","",""]], 
            idImg:"si4", 
            title:"Oshi No Ko", 
            genre:{superN,school}, 
            imgLink:"img/series/Oshi No Ko.jpg",
            preview:"A gynecologist named Gorou is murdered by an obsessive fan of the idol he is caring for. Gorou is reincarnated as the idol's newborn son, Aqua, and a terminal patient he knew is reborn as Aqua's twin sister, Ruby. Years later, Aqua enters the idol world to find the culprit behind the murder",
            videolink:"videos/【推しの子】ノンクレジットオープニング｜YOASOBI「アイドル」.mp4"
        },
        /*s5*/ {
            id:"s5",
            season:[["","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","",""],["","","","","","","","","","",""],["","","","","","","",""]], 
            idImg:"si5", 
            title:"Demon Slayer", 
            genre:{adventure,action,fantasy}, 
            imgLink:"img/series/Demon Slayer.webp",
            preview:"Tanjiro's family is slaughtered by demons, and only he and his younger sister, Nezuko, survive. Nezuko is slowly turning into a demon. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
            videolink:"videos/Demon Slayer _ Tanjiro vs Rui「4320p」8K.mp4"
        },
        /*s6*/ {
            id:"s6", 
            season:[["","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","",""]], 
            idImg:"si6", 
            title:"Jujutsu Kaisen", 
            genre:{school,action,fantasy,superN}, 
            imgLink:"img/series/Jujutsu Kaisen.jpg",
            preview:"A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself",
            videolink:"videos/Satoru Gojo vs Sukuna - Jujutsu Kaisen Episode 2 [1080p].mp4"
        },
        /*s7*/ {
            id:"s7", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","",""],], 
            idImg:"si7", 
            title:"Bungo Stray Dogs", 
            genre:{comedy,action,fantasy}, 
            imgLink:"img/series/Bungo Stray Dogs.jpg",
            preview:"After being kicked out of his orphanage, Atsushi saves a detective named Osamu Dazai, believing he was drowning in the river while his actual intention was suicide. Atsushi joins the agency to fight the Port Mafia and other threats to public safety.",
            videolink:"videos/Bungou Stray Dogs - Atsushi and Ryuunosuke Duo.mp4"
        },
        /*s8*/ {
            id:"s8", 
            season:[["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","",""]], 
            idImg:"si8", 
            title:"Haikyuu", 
            genre:{school,sports,comedy}, 
            imgLink:"img/series/Haikyuu.jpg",
            preview:"Shoyo Hinata, a boy who is determined to become a great volleyball player despite his small stature, joins the Karasuno High School volleyball club, where he's reunited with his hated rival, Kageyama.",
            videolink:"videos/Kageyama's Setter Dump Against Inarizaki .mp4"
        },
        /*s9*/ {
            id:"s9", idImg:"si9", 
            season:[["","","","","","","","","","","",""]],
            title:"A Sign of Affection", 
            genre:{romance,comedy,melodrama}, 
            imgLink:"img/series/A Sign of Affection.jpg",
            preview:"Yuki Itose is a university student with congenital hearing loss. Besides sign language, she communicates through text and lip reading. When a foreigner asked her for direction in a language she assumed was English, a young man comes to her aid and catches Yuki's attention. The story revolves around Yuki as she narrates her silent world, and the people around her.",
            videolink:"videos/A Sign Of Affection - Official Trailer .mp4"
        },
        /*s10*/ {
            id:"s10", 
            season:[["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]],
            idImg:"si10", 
            title:"Ahiru No Sora", 
            genre:{school,sports,comedy}, 
            imgLink:"img/series/Ahiru No Sora.avif",
            preview:"Sora is a freshman at Kuzuryū High, determined to follow in his mother's footsteps in basketball. However, he finds that the basketball club isn't quite as enthusiastic, consisting of delinquent students who never want to practice. Sora is already at a disadvantage, being much smaller and weaker than his peers.",
            videolink:"videos/SORA faces TOKIWA in a 1 VS 1 😮 - Ahiru no Sora.mp4"
        },
        /*s11*/{
            id:"s11", 
            season:[["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]],
            idImg:"si11", 
            title:"Attack On Titan", 
            genre:{action,fantasy,adventure}, 
            imgLink:"img/series/Attack On Titan.webp",
            preview:"In a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans, a 10 years old boy, Eren Yeager vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.",
            videolink:"videos/videos/Attack On Titan_ Trailer.mp4"
        },
        /*s12*/{
            id:"s12", 
            season:[["","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""]],
            idImg:"si12", 
            title:"Black Butler", 
            genre:{action,fantasy,comedy,superN}, 
            imgLink:"img/series/Black Butler.jpg",
            preview:"Ciel Phantomhive, the 12-year-old Earl of Phantomhive serving as the Queen's Watchdog, has formed a contract with demon Sebastian Michaelis, who disguises himself as his butler, to seek revenge on those who tortured him and murdered his parents. In exchange for his services, Sebastian will be allowed to consume Ciel's soul.",
            videolink:"videos/sebastian champagne scene , pro Sebastian , black butler dub.mp4"
        },
        /*s13*/ {
            id:"s13", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","",""]],
            idImg:"si13", 
            title:"Free", 
            genre:{school,sports,comedy}, 
            imgLink:"img/series/Free.jpg",
            preview:"The story is centered on high school student Haruka Nanase, a gifted swimmer. After encountering his childhood rival, Rin Matsuoka from Samezuka Academy, he and his friends revitalize Iwatobi High School's swim team.",
            videolink:"videos/Free! Trailer HD.mp4",
        },
        /*s14*/ {
            id:"s14", 
            idImg:"si14", 
            season:[["","","","","","","","","","","","",""]],
            title:"Hell's Paradise", 
            genre:{action,fantasy,psythriller}, 
            imgLink:"img/series/Hell's Paradise.jpg",
            preview:"A squad of prisoners and their guards are sent to investigate a mysterious island. They get stranded there and must rely on each other to survive the island's mysterious and monstrous residents.",
            videolink:"videos/Hell's paradise.mp4"
        },
        /*s15*/{
            id:"s15", 
            idImg:"si15", 
            season:[["","","","","","","","","","","","",""],["","","","","","","","","","","","",""]],
            title:"Horimiya", 
            genre:{romance,school}, 
            imgLink:"img/series/Horimiya.jpg",
            preview:"Two very different people - an academically successful schoolgirl and a quiet loser schoolboy - meet and develop a friendship.",
            videolink:"videos/Horimiya _ OFFICIAL TRAILER [English Sub].mp4"
        },
        /*s16*/ {
            id:"s16", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","","","","","",""]],
            idImg:"si16", 
            title:"Kaguya Sama Love Is War", 
            genre:{school,romance,comedy}, 
            imgLink:"img/series/Kaguya Sama Love Is War.avif",
            preview:"The proudly privileged top two students of an elite school each makes it their mission to be the first to extract a confession of love from the other.",
            videolink:"videos/Kaguya-sama_ Love is War Season 3 - Official Trailer.mp4"
        },
        /*s17*/{
            id:"s17", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","",""]],
            idImg:"si17", 
            title:"Kakegurui", 
            genre:{school,psythriller}, 
            imgLink:"img/series/Kakegurui.jpg",
            preview:"Yumeko Jabami is a transfer student with a gambling addiction. By counteracting the cheating methods of other gamblers, Yumeko disrupts the students' success and status",
            videolink:"videos/Kakegurui Trailer 「賭ケグルイ」.mp4"
        },
        /*s18*/{
            id:"s18", 
            season:[["","","","","","","","","","","",""],["","","","","","","","","","","",""]],
            idImg:"si18", 
            title:"Komi Can't Communicate", 
            genre:{school,romance,comedy}, 
            imgLink:"img/series/Komi Can't Communicate.jpg",
            preview:"Komi's attractiveness and stoic appearance make her popular, but prevent people from getting to know her. She has a dream to overcome her communication problems and make 100 friends. Komi develops romantic feelings for Tadano, but is too shy to express them.",
            videolink:"videos/Tadano turn into GOD mode.mp4"
        },
        /*s19*/{
            id:"s19",
            season:[["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","",""]],
            idImg:"si19", 
            title:"Kuroko's Basketball", 
            genre:{school,sports,comedy}, 
            imgLink:"img/series/Kuroko's Basketball.jpg",
            preview:"Once upon a time, a team of basketball prodigies rose to the top by demolishing all competition. This team became known as the Generation of Miracles, as they are all in the same year group and they were considered children of miracle.",
            videolink:"videos/Kuroko's Basketball Season 1 - Trailer.mp4"
        },
        /*s20*/{
            id:"s20", 
            season:[["","","","","","","","","","","",""]],
            idImg:"si20", 
            title:"Re-Main", 
            genre:{school,sports,comedy}, 
            imgLink:"img/series/Re-Main.jpg",
            preview:"During Winter of his third middle school year, water polo star Minato Kiyomizu got caught in an accident and has been in coma ever since. Exactly 203 days later, Minato regained his consciousness, but lost three years of his memories. Due to a certain reason, he decided to go back to water polo, but has no memories of his skill, let alone the sports' rules. Thus, Minato's efforts to catch up on what he has lost begins",
            videolink:"videos/Re-Main - OFFICIAL TRAILER.mp4"
        },
    ]
}
const viewId=localStorage.getItem("id");
const loginNName=localStorage.getItem("nickname");
console.log(loginNName);
console.log(viewId);
console.log("Work");
function show(id){
    const login=document.getElementById("login");
    login.innerText=loginNName.toUpperCase();
    const title=document.getElementById("title");
    const genreCon=document.getElementById("genre");
    const preview=document.getElementById("preview");
    let currentGenre=[];
    seriesInfo.data.forEach(i=>{
        if(id==i.id){
            title.innerText=i.title;
            for(let g in i.genre){
                currentGenre.push(g);
            }
            for (let j=0;j<currentGenre.length;j++){
                const genreType=document.createElement("h5");
                genreType.style.marginLeft="2px";
                genreType.style.marginRight="2px";
                genreType.innerText=currentGenre[j]+' / ';
                genreCon.appendChild(genreType);
            }
            preview.innerText=i.preview;
        }
    })
    function creating(){ 
        const videoCon=document.getElementById("videoId");
        const seasonCon=document.getElementById("seasonCon");
        seriesInfo.data.forEach((currentS)=>{
            if(id==currentS.id){
                const seasonI=currentS.season;
                // const videoId=document.createElement("video");
                videoCon.src=currentS.videolink;
                // videoId.className="video";
                for(let i=0;i<seasonI.length;i++){
                    
                    const seasonInnerCon=document.createElement("div");
                    const seasonNo=document.createElement("h2");
                    seasonNo.innerText="Season "+(i+1);
                    seasonNo.className="seasonNo";
                    const season=document.createElement("div");
                    season.className="season";
                    console.log("hi");
                    const currentSeason=seasonI[i];
                    for(let j=0;j<seasonI[i].length;j++){
                        console.log(j);
                        const eplink= document.createElement("a");
                        const epDiv= document.createElement("div");
                        epDiv.id="epsDiv";
                        epDiv.innerText = "Episode "+(j+1);
                        eplink.href=currentSeason[j];
                        eplink.className="eplink";
                        console.log(currentSeason[j]);
                        epDiv.onclick="link()";
                        season.appendChild(eplink);
                        eplink.appendChild(epDiv);
                    }
                    seasonCon.appendChild(seasonInnerCon);
                    seasonInnerCon.appendChild(seasonNo);
                    seasonInnerCon.appendChild(season);  
                }
            }
        })
    }
    creating();
    console.log("Reaching here");
}

      
        

window.onload = () =>{
    show(viewId);
}