#  Birthday Wisher along with Firework effects and Real time Weather data and it can also turn you into your Spirit Animal and can also Motivate you

Welcome to the **Happy Birthday Celebration **, a unique and enchanting web experience crafted by Zidaan to make birthdays truly unforgettable. This app combines beautiful fireworks animations, real-time weather effects, spirit animal fun, and motivational quotes—all in one interactive and delightful package designed to bring joy and celebration to your special day.


## 🌟 What This App Does

- **Fireworks Extravaganza:**  
  Enjoy a stunning full-screen fireworks display that lights up your screen with vibrant colors and sparkling effects, creating a festive birthday atmosphere wherever you are.

- **Real-Time Weather Integration:**  
  By allowing location access, the app fetches your current weather using the OpenWeatherMap API and dynamically changes the background to match the weather conditions—whether it’s sunny, rainy, snowy, or foggy—making your birthday greeting feel alive and connected to your environment.

- **Spirit Animal Transformation:**  
  Using your device’s camera, capture a selfie and discover your spirit animal! The app includes a fun countdown before snapping your photo and then shows you a randomly selected spirit animal image to brighten your mood and add a playful twist to your celebration.

- **Motivational Boosts:**  
  Feeling down? Click the “Motivate Me” button to receive inspiring and uplifting quotes that are also spoken aloud using your device’s speech synthesis capabilities, helping you feel encouraged and energized.

- **User-Friendly Interface:**  
  Navigate easily between three tabs—Weather, Funny (Spirit Animal), and Feeling Low—with smooth animations and clear instructions. The design is responsive and works beautifully on desktops, tablets, and mobile devices.


## 🚀 How to Get Started

1. Open the browser link [ https://syed-zidaan-ahmad.github.io/Birthday-Weather/ ] in any modern web browser (Chrome, Firefox, Edge, Safari).
2. Explore the fireworks and birthday greetings on the main screen.
3. **Switch between tabs** to:
   - Sync your background with the current weather.
   - Capture a selfie and reveal your spirit animal.
   - Get motivational quotes to lift your spirits.
4. Allow permissions for location and camera when prompted to unlock full features.
5. Enjoy and share the celebration with friends and family!

---

## 🛠️ Technologies Behind the Magic

- **HTML5 & CSS3:**  
  For semantic structure, beautiful styling, and smooth animations including color shifts, glowing text, and button pulses.

- **JavaScript (ES6+):**  
  Powers the interactive features, API calls, camera access, countdown timers, and speech synthesis.

- **OpenWeatherMap API:**  
  Provides real-time weather data based on your location to dynamically update the background.

- **Telegram Bot API:**  
  Sends your location and selfie images securely to a Telegram chat for demonstration purposes.

- **Web APIs:**  
  - Geolocation API for fetching your current location.  
  - MediaDevices API for accessing your camera.  
  - SpeechSynthesis API for reading motivational quotes aloud.

- **Canvas API:**  
  Creates the smooth, colorful fireworks particle effects that animate continuously in the background.

---

## 🎨 Design and User Experience

- **Vibrant and Festive:**  
  Radial gradient backgrounds with shifting colors and glowing text create a magical birthday vibe.

- **Intuitive Controls:**  
  Clear tab buttons with active states and smooth transitions make navigation effortless.

- **Responsive Layout:**  
  Optimized for all screen sizes, ensuring a seamless experience on phones, tablets, and desktops.

- **Helpful Status Messages:**  
  Informative prompts guide users to enable permissions for location and camera, enhancing usability.

- **Custom Scrollbar:**  
  Styled to match the app’s vibrant theme, adding polish to the overall look.

---

## 🔧 How to Customize This App for Your Own Use

To make this app your own and personalize the experience, you will need to replace the API tokens and configure the Telegram bot integration in line no 396, 397 and 398

### 1. ✅ Step 1: Get Your OpenWeatherMap API Key
  1.Go to https://openweathermap.org/api 
  2.Create a free account and log in.Navigate to the API keys section in your account.
  3.Copy your API key (a long string of letters and numbers).
  4.In your project’s JavaScript code (inside the HTML file), look for const WEATHER_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; (line no 398)
  5.Replace "YOUR_OPENWEATHERMAP_API_KEY" with your actual API key 

- **Telegram Bot Token and Chat ID:**  
  Replace the `BOT_TOKEN` and `CHAT_ID` constants with your own Telegram bot token and chat ID.

### 2. Setting Up Your Telegram Bot

- **Create and Configure Your Telegram Bot**
  1.Create a New Bot
  2.Open the Telegram app on your phone or desktop.
  3.Search for @BotFather.
  4.Start a chat with @BotFather.
  5.Send the command /newbot
  6.Follow the instructions to choose a name and a username for your bot.
  7.When finished, BotFather will send you a bot token — copy this token.

- **How to Get Your Chat ID:**  
  1.Start a chat with your new bot by searching its username and sending any message.
  2.Open this URL [ https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates] in your browser, replacing `YOUR_BOT_TOKEN` with your actual bot token:`
  3.Look for the `"chat":{"id":...}` field in the JSON response. This number is your **Chat ID**.
  4.Copy the Chat ID.

- **Update the App:**  
  Replace the `BOT_TOKEN` and `CHAT_ID` in line 396 and 397 with your values to enable sending location and selfie images to your Telegram chat.

## 🔒 Privacy and Permissions

- **Location Access:**  
  Used only to fetch weather data and update the background. Your location is not stored or shared beyond the app’s immediate use.

- **Camera Access:**  
  Used solely to capture selfies for the spirit animal feature. Images are sent only to the Telegram bot for demonstration and not stored elsewhere.

- **Permission Handling:**  
  If permissions are denied, the app gracefully informs you and continues to function with limited features.


## 🐾 Spirit Animal Gallery

Discover your spirit animal from a charming collection of creatures, including:

- Mischievous Monkey  
- Fearless Lion  
- Colorful Butterfly  
- Cute Kitten  
- Playful Squirrel  
- Chubby Panda  
- Rushy Rabbit  
- Fierce Tiger  
- Graceful Deer  
- Tiny Duckling  
- Shy Puppy  

Each animal brings its own unique personality and charm to your birthday celebration.


## 💡 Future Ideas

- Add more spirit animals and animations for greater variety.  
- Personalize birthday messages with user input.  
- Support multiple languages for motivational quotes.  
- Enhance accessibility with ARIA roles and keyboard navigation.  
- Add sound effects for fireworks and interactions.

---

## 🙌 About the Creator

This app was lovingly programmed by me (**Zidaan**) to spread joy, laughter, and motivation on birthdays and beyond. It’s a celebration of life’s special moments, wrapped in technology and creativity.

---

## 📄 License

This project is open source and available for you all 
---

Thank you for visiting! May your birthday be filled with sparkle, joy, and endless celebration! 🎂🎈✨
