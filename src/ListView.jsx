import CharacterList from "./components/CharacterList"
import { ApiCallContext } from './context/ApiContext'; 
import { useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'


function ListView() {
  const context = useContext(ApiCallContext);

  //this works fine but there must be a better way 100%

  if (!context.apiData) {
    const { data, isLoading, error } = useQuery({
      queryKey: ['todos'],
      refetchOnWindowFocus: false,
      queryFn: () =>
        fetch('https://thronesapi.com/api/v2/Characters').then(res => res.json()),
    });

    useEffect(() => {
      if (data) {
        context.setApiData(data);
        console.log('🐉 API CALLED', data);
      }
    }, [data, context]);

    return (
      <div className="main-div">
        <h1>Game of Thrones</h1>
        {
          (isLoading || error ? <h2>Loading...</h2> : <CharacterList />)
        }
  
      </div>
    );
  } else {
    return (
      <div className="main-div">
        <h1>Game of Thrones</h1>
        <CharacterList />
      </div>
    );
  }

}

export default ListView;