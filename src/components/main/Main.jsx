import React from 'react';
import Grid from '@material-ui/core/Grid';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Main = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={2}
  >
    <Editor />
    <Preview />
  </Grid>
);

export default Main;
