//login
import enLogin from '../assets/screencaptures/login/enLogin.png'
import esLogin from '../assets/screencaptures/login/esLogin.png'
import deLogin from '../assets/screencaptures/login/deLogin.png'
//shop now
import enShopNow from '../assets/screencaptures/shopNow/enShopNow.png'
import esShopNow from '../assets/screencaptures/shopNow/esShopNow.png'
import deShopNow from '../assets/screencaptures/shopNow/deShopNow.png'
//add to cart
import enAddToCart from '../assets/screencaptures/addToCart/enAddToCart.png'
import esAddToCart from '../assets/screencaptures/addToCart/esAddToCart.png'
import deAddToCart from '../assets/screencaptures/addToCart/deAddToCart.png'
//select player
import enChoosePlayer from '../assets/screencaptures/choosePlayer/enChoosePlayer.png'
import esChoosePlayer from '../assets/screencaptures/choosePlayer/esChoosePlayer.png'
import deChoosePlayer from '../assets/screencaptures/choosePlayer/deChoosePlayer.png'
//cart checkout general right
import enCart from '../assets/screencaptures/cart/enCart.png'
import esCart from '../assets/screencaptures/cart/esCart.png'
import deCart from '../assets/screencaptures/cart/deCart.png'
//cart summary general right
import enSummary from '../assets/screencaptures/cart/orderSummary/enSummary.png'
import esSummary from '../assets/screencaptures/cart/orderSummary/esSummary.png'
import deSummary from '../assets/screencaptures/cart/orderSummary/deSummary.png'
//cart networth impacts
import enNetworth from '../assets/screencaptures/cart/networthImpacts/enNetworth.png'
import esNetworth from '../assets/screencaptures/cart/networthImpacts/esNetworth.png'
import deNetworth from '../assets/screencaptures/cart/networthImpacts/deNetworth.png'
//cart annual income
import enAnnualIncome from '../assets/screencaptures/cart/annualIncome/enAnnualIncome.png'
import esAnnualIncome from '../assets/screencaptures/cart/annualIncome/esAnnualIncome.png'
import deAnnualIncome from '../assets/screencaptures/cart/annualIncome/deAnnualIncome.png'

export const arrayHowToPlay = [
  {
    id: 1,
    title: { en: 'Login', es: 'Iniciar sesion', de: 'Anmeldung' },
    subtitle: {
      en: 'First step is to login in order to be able to buy stuff, do one of the following',
      es: 'El primer paso es iniciar sesión para poder comprar algo, de una de las siguientes maneras',
      de: 'Der erste Schritt besteht darin, sich einzuloggen, um etwas kaufen zu können, und zwar auf eine der folgenden Weisen',
    },
    img: {
      en: enLogin,
      es: esLogin,
      de: deLogin,
    },
    step1: {
      en: 'Use guest account',
      es: 'Usar cuenta de invitado',
      de: 'Gastkonto verwenden',
    },
    step2: {
      en: 'Create a new user with username/password',
      es: 'Crear un nuevo usuario con nombre de usuario/contraseña',
      de: 'Einen neuen Benutzer mit Benutzername/Passwort anlegen',
    },
    step3: {
      en: 'Sign in with google button',
      es: 'Iniciar sesión con el botón de google',
      de: 'Mit der Google-Schaltfläche anmelden',
    },
  },
  {
    id: 2,
    title: { en: 'Shop Now', es: 'Comprar Ya', de: 'Jetzt einkaufen' },
    subtitle: {
      en: 'Now choose a category of luxry assets',
      es: 'Elige ahora una categoría de bienes de lujo',
      de: 'Wählen Sie nun eine Kategorie von Luxusgütern',
    },
    img: {
      en: enShopNow,
      es: esShopNow,
      de: deShopNow,
    },
    step1: {
      en: 'Use guest account',
      es: 'Usar cuenta de invitado',
      de: 'Gastkonto verwenden',
    },
    step2: {
      en: 'Create a new user with username/password',
      es: 'Crear un nuevo usuario con nombre de usuario/contraseña',
      de: 'Einen neuen Benutzer mit Benutzername/Passwort anlegen',
    },
    step3: {
      en: 'Sign in with google button',
      es: 'Iniciar sesión con el botón de google',
      de: 'Mit der Google-Schaltfläche anmelden',
    },
  },
  {
    id: 3,
    title: {
      en: 'Add to cart',
      es: 'Añadir al carrito',
      de: 'In den Einkaufswagen',
    },
    subtitle: {
      en: 'Click the button to add to cart, if you click again it will remove from cart',
      es: 'Haga clic en el botón para añadir a la cesta, si hace clic de nuevo se eliminará de la cesta',
      de: 'Klicken Sie auf die Schaltfläche zum Hinzufügen in den Warenkorb, wenn Sie erneut klicken, wird es aus dem Warenkorb entfernt',
    },
    img: {
      en: enAddToCart,
      es: esAddToCart,
      de: deAddToCart,
    },
    step1: {
      en: 'You can add as many different items as you want',
      es: 'Puedes añadir tantos productos diferentes como quieras',
      de: 'Sie können so viele verschiedene Artikel hinzufügen, wie Sie möchten',
    },
  },
  {
    id: 4,
    title: {
      en: 'Choose Player',
      es: 'Seleccionar jugador',
      de: 'Spieler auswählen',
    },
    subtitle: {
      en: 'A player is needed in order to be able to see the Cart page, due to networth balance equations',
      es: 'Se necesita un jugador para poder ver la página del Carrito, debido a las ecuaciones de saldo neto',
      de: 'Ein Spieler wird benötigt, um die Warenkorb-Seite sehen zu können, aufgrund von Gleichungen zum Nettowert',
    },
    img: {
      en: enChoosePlayer,
      es: esChoosePlayer,
      de: deChoosePlayer,
    },
    step1: {
      en: 'You can over write your actual player with a new one',
      es: 'Puedes sobreescribir tu personaje actual con uno nuevo',
      de: 'Sie können Ihren aktuellen Spieler mit einem neuen überschreiben',
    },
  },
  {
    id: 5,
    title: {
      en: 'Cart Page',
      es: 'Carrito de compras',
      de: 'Einkaufswagen Seite',
    },
    subtitle: {
      en: 'Here you will see your selected items to the left, and to the right how those items impact on the selected player networth, this last section will be covered in the next slide',
      es: 'Aquí verás los elementos seleccionados a la izquierda, y a la derecha cómo afectan al patrimonio del jugador seleccionado, esta última sección se tratará en la siguiente diapositiva.',
      de: 'Hier sehen Sie auf der linken Seite die von Ihnen ausgewählten Posten und auf der rechten Seite, wie sich diese Posten auf das Nettovermögen des ausgewählten Spielers auswirken; dieser letzte Abschnitt wird auf der nächsten Folie behandelt',
    },
    img: {
      en: enCart,
      es: esCart,
      de: deCart,
    },
    step1: {
      en: 'Here you can also remove items from the cart by clicking on the red X button',
      es: 'Aquí también puede eliminar artículos de la cesta haciendo clic en el botón rojo con la X',
      de: 'Hier können Sie auch Artikel aus dem Warenkorb entfernen, indem Sie auf den roten X-Button klicken',
    },
  },
  {
    id: 6,
    title: {
      en: 'Order Summary',
      es: 'Detalles del pedido',
      de: 'Zusammenfassung',
    },
    subtitle: {
      en: 'This section is were you will see the subtotal of all the products in your shopping cart, the discount if there should be any, and also the final cost of the cart with the discounts applied.',
      es: 'En esta sección es donde verás el subtotal de todos los productos de tu cesta, el descuento si lo hubiera y también el coste final de la cesta con los descuentos aplicados.',
      de: 'In diesem Bereich sehen Sie die Zwischensumme aller Produkte in Ihrem Warenkorb, den eventuellen Rabatt und den Endpreis des Warenkorbs nach Anwendung der Rabatte.',
    },
    img: {
      en: enSummary,
      es: esSummary,
      de: deSummary,
    },
    // step1: {
    //   en: 'Here you can also remove items from the cart by clicking on the red X button',
    //   es: 'Aquí también puede eliminar artículos de la cesta haciendo clic en el botón rojo con la X',
    //   de: 'Hier können Sie auch Artikel aus dem Warenkorb entfernen, indem Sie auf den roten X-Button klicken',
    // },
  },
  {
    id: 7,
    title: {
      en: 'Networth Impacts',
      es: 'Repercuciones en Patrimonio',
      de: 'Nettoauswirkung',
    },
    subtitle: {
      en: 'Here you will see how much does the total value of the shopping cart represents of the total networth of your selected player',
      es: 'Aquí verás cuánto representa el valor total de la cesta de la compra del patrimonio total de tu jugador seleccionado',
      de: 'Hier siehst du, wie viel der Gesamtwert des Warenkorbs vom Gesamtvermögen des ausgewählten Spielers ausmacht',
    },
    img: {
      en: enNetworth,
      es: esNetworth,
      de: deNetworth,
    },
    // step1: {
    //   en: 'Here you can also remove items from the cart by clicking on the red X button',
    //   es: 'Aquí también puede eliminar artículos de la cesta haciendo clic en el botón rojo con la X',
    //   de: 'Hier können Sie auch Artikel aus dem Warenkorb entfernen, indem Sie auf den roten X-Button klicken',
    // },
  },
  {
    id: 8,
    title: {
      en: 'Average Annual Income',
      es: 'Ingreso promedio anual',
      de: 'Durchschnittliches Jahreseinkommen',
    },
    subtitle: {
      en: 'This section evaluates the final value of the shopping against the average annual income of the selected country from the country dropdown.',
      es: 'Esta sección evalúa el valor final del carrito de compras con respecto a el ingreso anual promedio del país seleccionado en el desplegable de países.',
      de: 'In diesem Abschnitt wird der Endwert der Einkäufe mit dem durchschnittlichen Jahreseinkommen des in der Länderliste ausgewählten Landes verglichen.',
    },
    img: {
      en: enAnnualIncome,
      es: esAnnualIncome,
      de: deAnnualIncome,
    },
    // step1: {
    //   en: 'Here you can also remove items from the cart by clicking on the red X button',
    //   es: 'Aquí también puede eliminar artículos de la cesta haciendo clic en el botón rojo con la X',
    //   de: 'Hier können Sie auch Artikel aus dem Warenkorb entfernen, indem Sie auf den roten X-Button klicken',
    // },
  },
]
