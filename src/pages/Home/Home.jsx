import tweets1 from 'images/tweets1.png'
const Home = () => {
    return (
        <main>
            <h1>Welcome</h1>
                <ul>
                    <li><img src={tweets1} alt=" cards" /></li>
                    <li><img src={tweets1} alt="cards" /></li>
                    <li><img src={tweets1} alt="cards" /></li>
                </ul>
        </main>
    );
}

export default Home;