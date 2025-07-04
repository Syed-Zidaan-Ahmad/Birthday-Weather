# Birthday Wisher
## A Progressive Web App which wishes you Happy Birthday along with Firework effects and Real time Weather data and it can also turn you into your Spirit Animal and can also Motivate you

**Made by Zidaan**

---

## ✨ Overview

Bring birthday wishes to life with this modern, interactive, and beautifully designed web application.  
It transforms a simple birthday greeting into a **dynamic, fun-filled experience** complete with:

- 🌠 **Fireworks animations**  
- ☁️ **Weather-based backgrounds**  
- 🐾 **Spirit animal selfies**  
- 💪 **Motivational quotes with text-to-speech**  
- ℹ️ **An Info button** explaining how to install and use the app clearly

This page is perfect for surprising friends, adding magic to birthday parties, or showcasing your creative web skills.

---

# Try this by clicking the link provided and if you like it, star the repo and spread the love!  

https://syed-zidaan-ahmad.github.io/Birthday-Weather/

---

## 🚀 Features

✅ **Fireworks Show**  
→ Full-screen canvas fireworks that launch in vibrant colors with smooth particle effects.

✅ **Weather Sync**  
→ Syncs background to real-time weather based on the user’s approximate location.  
→ Place name and weather type displayed dynamically.

✅ **Spirit Animal Generator**  
→ Starts the front camera with a countdown  
→ Lets the user preview and retake their selfie  
→ Randomly shows a “spirit animal” with a fun image and name.

✅ **Motivation Mode**  
→ Inspires users with randomly chosen motivational quotes  
→ Quotes are spoken aloud using modern speech synthesis.

✅ **Info Button for Guidance**  
→ A convenient “ℹ️” button in the top corner shows clear instructions on how to install and use the PWA on both **phones and desktops**  
→ Includes scrollable, mobile-friendly instructions so no one is confused.

✅ **Tabbed Navigation**  
→ Seamless tab transitions between Weather, Spirit Animal, and Motivation  
→ Responsive on phones, tablets, and desktop screens.

✅ **Privacy-First**  
→ Location is requested **only** to fetch and display weather  
→ Camera is requested **only** to preview the spirit animal  
→ No permanent storage, no third-party tracking, no hidden analytics.

✅ **Progressive Web App (PWA)**  
→ You can **install** this app on your phone or desktop just like a native app  
→ Works offline (after first load)  
→ Includes icons and splash screen  
→ Powered by a simple `manifest.json` and `service-worker.js`

---

## 💡 Project Idea

The idea is to create a **personalized and memorable birthday greeting** that goes beyond static text, using:

- Real-time data (weather)  
- Personalized elements (camera selfies)  
- Playful elements (spirit animals)  
- Emotional support (motivational quotes)

all blended in a **delightful tab-based interface**.

---

## 🛠️ Setup Guide

Follow these steps to make it your own:

---

### 1️⃣ Clone or Download

```bash
git clone https://github.com/Syed-Zidaan-Ahmad/Birthday-Weather.git
```

or download and extract the ZIP.

---

### 2️⃣ Get Your OpenWeather API Key

1. Go to [https://openweathermap.org/api]  
2. Sign up and get your free API key  
3. In the script.js code (line no 6) replace:
```js
const WEATHER_API_KEY = "your_api_key_here";
```
with your own API key.

---

### 3️⃣ Set up Telegram Bot

1. Open Telegram and search for `@BotFather`  
2. Create a bot, copy its token  
3. Start a chat with your bot, send any message, and note down your chat ID  
   - You can use `@userinfobot` to get your user ID  
4. Replace these lines (line no 4 and 5) in the script.js code:
```js
const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";
```
with your actual bot token and chat ID.

---

### 4️⃣ Add Progressive Web App Support

✅ You already have `manifest.json` and `service-worker.js` in the root of this project.  
✅ In your `index.html`, make sure these lines are added inside the `<head>`:

```html
<link rel="manifest" href="manifest.json">
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.log('Service Worker registration failed:', err));
  }
</script>
```

✅ Make sure your icons (`Birthday Weather 192.png` and `Birthday Weather 512.png`) are present in the root directory and match the names in your manifest.  
✅ When you deploy on GitHub Pages, do a hard refresh (Ctrl+F5) to see the install prompt on supported browsers.

---

### 5️⃣ Run It Locally (Experimental)

- Open `index.html` in your browser  
- Allow location (for weather)  
- Allow camera (for spirit animal selfie preview)  
- Test install prompt (Add to Home Screen)

---

## ✍️ Customization Tips

🎇 **Fireworks Colors**  
→ Edit the `colors` array in `createFirework` to change the spark colors.

🌤️ **Weather Backgrounds**  
→ You can swap the GIFs in the `getWeatherGif` function to match your style.

🐯 **Spirit Animal List**  
→ Modify the `funnyAnimals` array with your own animal images and names.

💬 **Motivational Quotes**  
→ Extend or edit the `quotes` array to fit your vibe.

ℹ️ **Info Button Instructions**  
→ The Info button’s content is customizable in the HTML — you can change its text and the install guidance if needed.

---

## 🛡️ Privacy & Data Usage

✅ Location is **only** fetched to show the current weather (no precise address stored)  
✅ Camera is **only** activated to preview the spirit animal (no permanent uploads)    
✅ No other data is tracked, saved, or sold  
✅ 100% user-controlled, no hidden surveillance

---

## 🌐 Deployment

You can host this app **for free** on:

- GitHub Pages  
- Netlify  
- Vercel

Simply upload the `index.html`, `manifest.json`, `service-worker.js`, and your icons — and it works instantly.

---

## 🏆 Why This Project Stands Out

✅ Fully interactive  
✅ Lightweight and fast (pure JS, no frameworks needed)  
✅ Works on phones and desktops  
✅ Engaging tabbed interface  
✅ Professional look  
✅ Very easy to customize  
✅ **Perfect for birthday surprises**

---

## 🤝 Contributing

Feel free to fork, tweak, and suggest improvements — PRs are most welcome!  
If you come up with more animal images or even more creative tabs, let’s make it even cooler together.

---

# 🎂 Let’s make birthdays unforgettable. Enjoy! 🎉

*If you like it, star the repo and spread the love! 🌟*

## Thank You ##
