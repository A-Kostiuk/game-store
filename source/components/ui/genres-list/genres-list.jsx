import React from 'react';
import { GenreItem, List } from 'src/components/ui/genres-list/styles';

function GenresList({genres}) {
  return (
    <List>
      {genres.map((genre) => <GenreItem key={genre}>{genre}</GenreItem>)}
    </List>

  );
}

export default GenresList;
