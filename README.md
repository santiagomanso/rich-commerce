## Table of Contents

- [Rich Commerce app](#rich-commerce-app)
  - [Description](#description)
  - [Live site](#live-site)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Dependencies](#dependencies)
  - [Features](#features)
    - [Language Switcher](#language-switcher)
      - [Functionallity](#functionallity)
      - [User Experience](#user-experience)
    - [Select Player](#select-player)
      - [Functionality](#functionality)
      - [User Experience](#user-experience-1)
    - [Protected Route / RedirectMsg / Redirect Context](#protected-route--redirectmsg--redirect-context)
      - [Functionality](#functionality-1)
      - [User Experience](#user-experience-2)

# Rich Commerce app

## Description

The app is an e-commerce platform with a unique twist. Users can **choose a billionaire as a playable character and then use their net worth as a budget to purchase expensive assets such as real estate, luxury cars,**, providing a fun and engaging way to learn about the lifestyles and assets of some of the world's wealthiest individuals. The app is designed to be user-friendly and easy to navigate, making it accessible to users of all levels of experience.

---

## Live site

[Rich Simulator](https://rich-simulator.netlify.app/)

<a href="https://rich-simulator.netlify.app/"><img src="https://i.ibb.co/CstP2wK/Purple-and-Pink-Gradient-Modern-Birthday-Card-1.png" alt="Purple-and-Pink-Gradient-Modern-Birthday-Card-1" border="0" style="border-radius: 20px"></a>

---

## Installation

```
npx install
```

## Environment Variables

In order for the application to function properly, developers will need to create a .env file in the root directory of the project and add the following variables:

.env

```
REACT_APP_FIREBASE_KEY: the key for your Firebase project
REACT_APP_FIREBASE_AUTHDOMAIN: the auth domain for your Firebase project
REACT_APP_FIREBASE_PROJECTID: the project ID for your Firebase project
REACT_APP_FIREBASE_STORAGEBUCKET: the storage bucket for your Firebase project
REACT_APP_FIREBASE_MESSAGINGSENDERID: the messaging sender ID for your Firebase project
REACT_APP_FIREBASE_APPID: the app ID for your Firebase project

// Guest Account (if you have a dedicated guest account on firebase)
REACT_APP_GUEST_USERNAME: the username for the guest account
REACT_APP_GUEST_PASSWORD: the password for the guest account
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

### Language Switcher

#### Functionallity

**LanguageContext**: This component creates a LanguageContext using the createContext method from the React library. It also exports a LanguageProvider component which, when rendered, wraps its children with the LanguageContext.Provider component and provides the context data. The data object passed as the value to the Provider contains the current language, the corresponding text translations, and a function to handle changing the language. The language and text state variables are initialized to 'en' and the translations.en object respectively. The handleChangeLanguage function sets the language and text state variables based on the language argument passed to it, by using the switch statement to match the passed language with the available languages in the translations object. This allows for dynamic language switching throughout the app by consuming the LanguageContext in the components that need it.

#### User Experience

A user benefits from being able to switch between different languages by having improved accessibility and usability, as they can interact with the application in their native language, increased reach as the application can be used by a wider audience, including users who may not be fluent in the default language, and improved localization as the user can interact with the application in their preferred language.

- Involved files

```
src/context/LanguageContext.jsx
src/components/dropdown/LanguageDropdown.jsx
```

### Select Player

#### Functionality

**PlayerContext.jsx**: This component creates a context object named PlayerContext and a provider component named PlayerProvider. The provider component sets up a state variable player which holds the current player object, and another state variable attemptedPlayer which holds an attempted player object. The initial value of player is retrieved from localStorage using the getPLayerFromStorage function, which checks if a 'player' item exists in localStorage and returns the parsed JSON object if it does, or an empty array if it doesn't.

The useEffect hook updates the 'player' item in localStorage with the current player state variable, every time the player state variable changes.

The provider component also has a resetPlayer function which sets the player state variable to an empty string.

The provider component passes down the player, setPlayer, attemptedPlayer, setAttemptedPlayer and resetPlayer functions to its children via the context object.

#### User Experience

The benefit for the user is that they can easily interact with the player object, change it and reset it, and the changes will be reflected throughout the application and will be saved in the browser's local storage, allowing the user to have a consistent experience across multiple sessions.

**On the Character component the following is happening:** The handleClick function is a callback function that is invoked when the button with the class of btnPlay is clicked. Inside the function, the setPlayer function from the PlayerContext is being invoked with the character object passed as an argument. This is updating the global player state with the selected character object.

- Involved files:

```
src/context/PlayerContext.jsx
src/components/character/Character.jsx
```

### Protected Route / RedirectMsg / Redirect Context

#### Functionality

The ProtectedRoute component is a Higher Order Component (HOC) that checks if there is an existing user by extracting the user object from the UserAuth context. If there is no user, it renders the RedirectMsg component. If there is a user, it returns the children components that were passed to it.

The RedirectMsg component uses the LanguageContext to display a message to the user stating that they need to log in first, and uses the useNavigate hook from react-router-dom to redirect the user to the /login route after 3 seconds. It also uses a timer to keep track of the seconds remaining before the redirection and displays it to the user.

The RedirectContext is being used to store the path state, which is used to store the original URL the user was trying to access before being prompted to log in. This state is being set and updated in the login component, which also uses the useEffect to detect when the path state is updated and redirect the user to that path after they have logged in.

#### User Experience

For a given user, this means that when they try to access a protected route on the app that requires them to be logged in, they will be redirected to the /login route and shown a message stating that they need to log in first.

This benefits the user by providing them with a clear indication that they need to log in in order to access that specific route, it also redirects them to the login page, which makes it easy for them to log in.

Once the user logs in, the app will use the path state stored in the RedirectContext to redirect the user back to the original URL they were trying to access before being prompted to log in. This allows the user to seamlessly continue their experience on the app and access the content they were originally trying to view. This improves the user experience by making it easy for them to access the content they want without having to manually navigate back to the original URL they were trying to access.

- Involved files:

```
src/context/RedirectContext.jsx
src/context/UserContext.jsx
src/components/ProtectedRoute/ProtectedRoute.jsx
src/components/.jsx
```
