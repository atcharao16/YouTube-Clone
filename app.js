const videoContainer = document.getElementById("video-container");
const loadingSpinner = document.getElementById("loading-spinner");

function generateId(){
    return Math.random().toString(36).substring(2,12);
}

const videos = [
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/1.webp',
        channelIcon : 'assets/profiles/gfg.png',
        title : "Backend Development 2025| ReactJs | NodeJS | ExpressJs | MongoDB",
        channelName : "GeeksforGeeks",
        views : '23,070 views',
        time : '10 days ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/2.webp',
        channelIcon : 'assets/profiles/gfg.png',
        title : "DSA to Development Course 2025",
        channelName : "GeeksforGeeks",
        views : '98 views',
        time : '1 day ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/4.webp',
        channelIcon : 'assets/profiles/gfg.png',
        title : "Technincal Interview | Computer Science Subjects",
        channelName : "GeeksforGeeks",
        views : '230 views',
        time : '1 month ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/7.png',
        channelIcon : 'assets/profiles/gfg.png',
        title : "Google CEO Sundar Pichai on the future of search, AI agents",
        channelName : "TodayNews",
        views : '350 views',
        time : '4 days ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/5.webp',
        channelIcon : 'assets/profiles/gfg.png',
        title : "Java from basics to advance course",
        channelName : "GeeksforGeeks",
        views : '2,700 views',
        time : '2 days ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/3.webp',
        channelIcon : 'assets/profiles/gfg.png',
        title : "Sotware Testing Course 2025",
        channelName : "GeeksforGeeks",
        views : '23,070 views',
        time : '1 week ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/6.webp',
        channelIcon : 'assets/profiles/gfg.png',
        title : "C++ Programming Language Course | Full Course",
        channelName : "GeeksforGeeks",
        views : '350 views',
        time : '4 days ago'
    },
    {
        videoId : generateId(),
        thumbnail : 'assets/thumbnails/8.png',
        channelIcon : 'assets/profiles/gfg.png',
        title : "NVIDIA CEO Jensen Huang holds fireside chat on AI",
        channelName : "AInews",
        views : '350 views',
        time : '4 days ago'
    }
]

function loadVideos(){
    videos.forEach(video => {
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("video");

        videoDiv.innerHTML = `
        <img src = "${video.thumbnail}"  class = "thumbnail" alt ="">
        <div class = "content">
            <img src = "${video.channelIcon}"  class = "channel-icon" alt = "">
            <div class = "info">
                <h4 class = "title">${video.title}</h4>
                <p class = "channel-name">${video.channelName}</p>
                <p class = "views-time">${video.views} • ${video.time} </p>
            </div>
        </div>
        `

        videoDiv.addEventListener("click" , () => {
            window.location.href =`video.html?videoId=${video.videoId}`
        });
        videoContainer.appendChild(videoDiv);
    });
}

window.onload = function(){
    
    this.setTimeout(() => {
        loadVideos()
        loadingSpinner.style.display = "none"
    },3000);
}

