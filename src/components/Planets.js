import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets/',{
    staleTime: 5000,
    cacheTime: 10,
    onSuccess: () => console.log('data fetched with no problems'),
  });
  return res.json();
}


const Planets = () => {

  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(status);

  return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && (
        <div className="progress">
        <div className="indeterminate"></div>
    </div>
      )}

      {status === 'error' && (
        <div><div class="materialert error">
		    <div class="material-icons">error_outline</div>
		    Error fetching data 😓 
		</div></div>
        
      )}

{status === 'success' && (
        <div>
          { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default Planets;