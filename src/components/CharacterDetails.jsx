import React, { useContext, useMemo } from 'react';
import { useParams, NavLink } from 'react-router';
import { ApiCallContext } from '../context/ApiContext';

function CharacterDetails() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const context = useContext(ApiCallContext);

    const character = useMemo(() => {
        return context.apiData?.find(obj => obj.id == id);
    }, [context.apiData, id]);

    if (!character) {
        return (
            <div className="main-div">
                <h2>Could not find the character with ID: {id}</h2>
                <NavLink to="/" end>
                    <button className="back-button">Go back</button>
                </NavLink>
            </div>
        );
    }

    const { imageUrl, fullName, title, family, firstName, lastName } = character;

    return (
        <div className="main-div">
            <div className="character-details">
                <img src={imageUrl} alt={fullName} />
                <div className="character-info">
                    <h2>{fullName}</h2>
                    <p><strong>Title:</strong> {title}</p>
                    <p><strong>Family:</strong> {family}</p>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Last Name:</strong> {lastName}</p>
                </div>
            </div>
            <NavLink to="/" end>
                <button className="back-button">Go back</button>
            </NavLink>
        </div>
    );
}

export default CharacterDetails;