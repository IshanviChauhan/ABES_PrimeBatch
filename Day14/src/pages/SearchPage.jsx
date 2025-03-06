import "./SearchPage.css";
import Card from "../Components/Card"

const cards = [
    {
        title: "Invitation",
        text: "You are invited!",
    },
    {
        title: "Notice",
        text: "Please have a look at it",
    },
];

const SearchPage = () => {
    return (
        <div className="search-page">
            <header>Hello from Search Page</header>
            <h2>Search Here...</h2>
            <div>
                <div class="cards-container">
                    {cards.map((elem) => {
                        return <Card key={elem.title} title={elem.title} text={elem.text} />;
                    })}
                </div>
            </div>
            <footer>&copy; CopyRight @Logo</footer>
        </div>
    );
}

export default SearchPage;