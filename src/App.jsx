import { Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
