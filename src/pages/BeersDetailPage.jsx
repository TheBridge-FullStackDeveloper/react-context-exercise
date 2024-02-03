import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const BeersDetailPage = () => {
  const BeersApi = 'https://api.punkapi.com/v2/beers';
  const { id } = useParams();

  const fetchDataById = async (id) => {
    const response = await fetch(`${BeersApi}/${id}`);
    const jsonData = await response.json();
    return jsonData[0];
  };

  const { data: BeersData, isLoading } = useQuery({
    queryKey: ['beersChars', id],    
    queryFn: () => fetchDataById(id),
  });
  console.log(BeersData);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{BeersData.name}</h1>
      <h2>{BeersData.tagline}</h2>
      <h3>First brewed: {BeersData.first_brewed}</h3>
      <p><b>{BeersData.description}</b></p>
      <img src={BeersData.image_url} alt="" />
      <p>Alcohol: {BeersData.abv}%</p>
    </div>
  );
};