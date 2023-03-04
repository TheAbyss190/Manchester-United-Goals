const videos = [
    "https://www.youtube.com/embed/mLVWLioQqPg?start=118",
    "https://www.youtube.com/embed/mLVWLioQqPg?start=121",
    "https://www.youtube.com/embed/dHxqqUXrmOQ?start=13",
    "https://www.youtube.com/embed/dHxqqUXrmOQ?start=88",
    "https://www.youtube.com/embed/dHxqqUXrmOQ?start=111",
    "https://www.youtube.com/embed/nAOHGS2SSAM?start=90",
    "https://www.youtube.com/embed/-Dz2vMMTZqg?start=41",
    "https://www.youtube.com/embed/-Dz2vMMTZqg?start=66",
    "https://www.youtube.com/embed/-Dz2vMMTZqg?start=112"
]

const refreshVideo = () => {
    let video = document.getElementById('ytVideo');
    video.src = videos[Math.floor(Math.random()*videos.length)] + '&autoplay=1'
}