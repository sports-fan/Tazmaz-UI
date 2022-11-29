import React, {Suspense} from 'react'
import { CssBaseline } from '@mui/material'
import Pages from './pages'
import Loader from 'components/Loader';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Pages />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
