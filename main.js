const signInButton = document.querySelector('#signInButton');
const signUpButton = document.querySelector('#signUpButton');
const overlayContainer = document.querySelector('.container .overlay-container');
const overlay = document.querySelector('.container .overlay-container .overlay');

if(signInButton){
    signInButton.addEventListener('click', () => {
            overlayContainer.style.transform = 'translateX(100%)';
    } , false);
}
// signInButton.addEventListener('click', () => {
//     overlayContainer.style.transform = 'translateX(100%)';
// });