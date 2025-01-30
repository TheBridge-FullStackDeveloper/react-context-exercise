import Character from './Character';
import { ApiCallContext } from '../context/ApiContext'; 
import { useContext } from 'react'

function CharacterList() {
    const context = useContext(ApiCallContext);
    //console.log('😵‍💫 LIST: ', context.apiData)

    return (
        <>
            <div className="character-list">
                {context.apiData?.map(character => <Character key={character.id} character={character} />)}
            </div>
        </>
    )
}

export default CharacterList