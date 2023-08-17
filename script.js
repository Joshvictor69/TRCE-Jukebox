
// Define the list of songs with their file paths
const songs = [
    { title: 'Song 1', path: 'songs/clip1.mp3' },
    { title: 'Song 2', path: 'songs/clip2.mp3' },
    // Add more songs as needed
];
// Get the song list element and the audio player element
const songList = document.getElementById('song-list');
const audioPlayer = document.getElementById('audio-player');
// Generate a button for each song
songs.forEach(song => {
    const songButton = document.createElement('button');
    songButton.innerText = song.title;
    songButton.addEventListener('click', () => {
        playSong(song.path);
    });
    songList.appendChild(songButton);
});
// Function to play a selected song
function playSong(path) {
    audioPlayer.src = path;
    audioPlayer.play();
}
