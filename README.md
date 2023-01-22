- [Rich Commerce app](#rich-commerce-app)
  - [Description](#description)
  - [Live site](#live-site)
  - [Installation](#installation)
  - [Dependencies](#dependencies)
  - [Features](#features)
    - [Language switcher](#language-switcher)
    - [Player Context](#player-context)

# Rich Commerce app

## Description

The app is an e-commerce platform with a unique twist. Users can **choose a billionaire as a playable character and then use their net worth as a budget to purchase expensive assets such as real estate, luxury cars,** . The app allows users to live out their fantasies of being a billionaire and making high-end purchases, while also **providing a fun and engaging way to learn about the lifestyles and assets of some of the world's wealthiest individuals**. The app is designed to be user-friendly and easy to navigate, making it accessible to users of all levels of experience. **It's a great way for users to learn about the assets and net worth of different billionaires**, and make some fun purchases along the way.

---

## Live site

[Rich Simulator](https://rich-simulator.netlify.app/)

<a href="https://rich-simulator.netlify.app/"><img src="https://i.ibb.co/CstP2wK/Purple-and-Pink-Gradient-Modern-Birthday-Card-1.png" alt="Purple-and-Pink-Gradient-Modern-Birthday-Card-1" border="0" style="border-radius: 20px"></a>

---

## Installation

```
npx install
```

## Dependencies

```
React-router-dom    // routing
Firebase            // auth
Swiper              // carousels
Tailwind CSS        // CSS framework
Postcss             // Vendor prefixes
Autoprexier         // Vendor prefixes
Axios               // Fetch data from API forbes400
```

---

## Features

### Language switcher

This component creates a LanguageContext using the createContext method from the React library. It also exports a LanguageProvider component which, when rendered, wraps its children with the LanguageContext.Provider component and provides the context data. The data object passed as the value to the Provider contains the current language, the corresponding text translations, and a function to handle changing the language. The language and text state variables are initialized to 'en' and the translations.en object respectively. The handleChangeLanguage function sets the language and text state variables based on the language argument passed to it, by using the switch statement to match the passed language with the available languages in the translations object. This allows for dynamic language switching throughout the app by consuming the LanguageContext in the components that need it.

- Involved files

```
src/context/LanguageContext.jsx
src/components/dropdown/LanguageDropdown.jsx
```

### Player Context

This component creates a context object named PlayerContext and a provider component named PlayerProvider. The provider component sets up a state variable player which holds the current player object, and another state variable attemptedPlayer which holds an attempted player object. The initial value of player is retrieved from localStorage using the getPLayerFromStorage function, which checks if a 'player' item exists in localStorage and returns the parsed JSON object if it does, or an empty array if it doesn't.

The useEffect hook updates the 'player' item in localStorage with the current player state variable, every time the player state variable changes.

The provider component also has a resetPlayer function which sets the player state variable to an empty string.

The provider component passes down the player, setPlayer, attemptedPlayer, setAttemptedPlayer and resetPlayer functions to its children via the context object.

**On the Character component the following is happening:** The handleClick function is a callback function that is invoked when the button with the class of btnPlay is clicked. Inside the function, the setPlayer function from the PlayerContext is being invoked with the character object passed as an argument. This is updating the global player state with the selected character object.

- Involved files:

```
src/context/PlayerContext.jsx
src/components/character/Character.jsx
```
