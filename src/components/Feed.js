import React, { useState, useEffect } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { useNavigate } from 'react-router-dom';

const initialDataState = {
  sort: [{
    field: 'title',
    dir: 'asc',
  }],
  take: 5,
  skip: 0,
  filter: {
    logic: 'and',
    filters: [],
  },
};

const Feed = () => {
  const navigate = useNavigate();
  const [dataState, setDataState] = useState(initialDataState);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=96bbf18fbc6074399e7c04dc2cb11dae')
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  const onDataStateChange = (e) => {
    setDataState(e.dataState);
  };

  const processedMovies = process(movies, dataState);

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleNavigateHome}>Home</button>
      <Grid
        style={{ height: '520px' }}
        data={processedMovies}
        filterable={true}
        pageable={true}
        {...dataState}
        onDataStateChange={onDataStateChange}
      >
        <Column field="title" title="Title" filterable={true} />
        <Column field="release_date" title="Release Date" filterable={true} />
        <Column field="vote_average" title="Vote Average" filterable={true} />
        <Column
          field="poster_path"
          title="Poster"
          filterable={false}
          cell={(props) => (
            <td>
              <img
                src={`https://image.tmdb.org/t/p/w200${props.dataItem.poster_path}`}
                alt={props.dataItem.title}
                style={{ width: '70px', height: '80px' }}
              />
            </td>
          )}
        />
      </Grid>
    </div>
  );
};

export default Feed;
