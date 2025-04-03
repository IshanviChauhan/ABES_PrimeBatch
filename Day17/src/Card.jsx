import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ name, email, githubLink }) => {
    const [data, setData] = useState({});
    const res = githubLink.split("/");
    const userId = res[3];

    const getData = async () => {
        const resp = await fetch(`https://api.github.com/users/${userId}`);
        const temp = await resp.json();
        setData(temp);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="card">
            <h3>{name}</h3>
            <img width="100" src={data.avatar_url} alt="profile photo" />
            <p>{email}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
        </div>
    );
};

export default Card;