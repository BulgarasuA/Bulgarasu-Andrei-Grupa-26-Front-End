import dayjs from "dayjs";
import "./home.css";


const today = dayjs().format('DD/MM/YYYY');
const getHomePage = () => {
    return `
    <h1 class = "home-title">Home Page</h1>
    <p>${today}</p>
    <p class = 'paragraph-home'>lorem ipsum dolor sit amet consectetur adipisicing el. </p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
    `
}



export default getHomePage;