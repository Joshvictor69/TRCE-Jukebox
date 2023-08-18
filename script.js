
// Define the list of songs with their file paths
const songs = [
    { title: 'Cant Unsuck', path: 'https://drive.google.com/uc?export=download&id=1VE-XF-DAp5GO3VBND8YRkQvfsmfM7QVH' },
    { title: 'Infinity Jam', path: 'https://drive.google.com/uc?export=download&id=1qP28-A7MJa7e22MV-Nc7DXLWeUfvc4z7' },
     { title: 'The Slip', path: 'https://drive.google.com/uc?export=download&id=1nlegdVcFyK_qRcHCnXkQx53vb8H1ZLWM' },
    { title: 'Laloo - Live', path: 'https://drive.google.com/uc?export=download&id=1nlegdVcFyK_qRcHCnXkQx53vb8H1ZLWM' },
    { title: 'Smoka The Wood', path: 'https://drive.google.com/uc?export=download&id=1jgNXOfl1ZX70vsQdl0RANK468iZ-aq-8' }
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
    
