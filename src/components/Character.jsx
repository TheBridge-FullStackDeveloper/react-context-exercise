import { NavLink } from "react-router";

function Character({character}) {
    return (
        <NavLink to={"/"+character.id} end>
            <div className="character-item">
                <img src={character.imageUrl} alt={character.firstName} />
                <div className="character-info">
                    <h2>{character.firstName}</h2>
                    <p>{character.title}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Character