import './style.css'
import getHomePage from './pages/getHomePage';
import { getAboutPage } from './pages/getAboutPage';

import { getLayout } from "./getLayout";
const appHtlmDiv = document.querySelector('#app');
appHtlmDiv.innerHTML = getLayout();

const homeButton = document.querySelector("header nav ul li:first-child a");
const aboutButton = document.querySelector("header nav ul li:nth-child(2) a");

const mainContent = appHtlmDiv.querySelector('#app-main-content');

const homeContent = getHomePage()
const aboutContent = getAboutPage();

homeButton.addEventListener('click', () => {
  mainContent.innerHTML = homeContent;
});
aboutButton.addEventListener('click', () => {
  mainContent.innerHTML = aboutContent;
});



