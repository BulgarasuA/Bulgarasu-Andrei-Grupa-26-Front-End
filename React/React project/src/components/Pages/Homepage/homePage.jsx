import dayjs from 'dayjs';
import "./homePage.css";
const today = dayjs().format('DD/MM/YYYY');
function HomePage() {

    return (
        <>
            <h1 className='home-title'>Home Page</h1>
            <p>{today}</p>
            <p className='paragraph-home'>lorem ipsum dolor sit amet consectetur adipisicing el. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </>
    )
}


export default HomePage;

