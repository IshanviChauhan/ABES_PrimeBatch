import {Link} from 'react-router';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <a href="/">Home Anchor</a>
            <br />
            <Link to="/">Home Link</Link>
        </div>
    );
}

export default NotFoundPage;