import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
}



const People = () => {
   const { data, status } = useQuery('people', fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
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
          { data.results.map(person => <Person key={person.name} person={person} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default People;