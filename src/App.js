import './App.css';
import Header from './components/Header';
import Jobs from './components/Jobs';
import {Container} from 'reactstrap';
import ParamsForm from './components/ParamsForm';
import JobsPagination from './components/JobsPagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider} from './components/ThemeState';

function App() {
  const [appDarkMode, setAppDarkMode] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [params, setParams] = useState({
    description: '',
    location: '',
    full_time: false
  });
  
  const onParamsChange = (e) => {
    const paramsName = e.target.name;
    const paramsValue = paramsName === 'full_time' ? e.target.checked : e.target.value;
    setParams({
      ...params,
      [paramsName]: paramsValue
    });
    setHasNextPage(false);
    setPage(1);
  }

  const onPageChange = (newPage) => {
    setHasNextPage(false);
    setPage(newPage);
  }

  // Check if next page exists
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get('https://jobs.github.com/positions.json', {
        cancelToken: cancelToken.token,
        params: {
          page: page+1,
          ...params
        }
      })
      .then((res) => {
        setHasNextPage(res.data.length > 0);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return;
        }
        setHasNextPage(false);
      })

      return () => {
        cancelToken.cancel();
      }
  }, [page]);

  return (
    <ThemeProvider>
      <div 
      style={{
        color: appDarkMode ? 'white' : 'black',
        backgroundColor: appDarkMode ? 'black' : 'white',
        width: '100%',
        minHeight: '100vh',
        padding: '1px'
      }}>
        <Container >
          <Header
            appDarkMode={appDarkMode}
            setAppDarkMode={setAppDarkMode}
          />
          <ParamsForm 
            params={params}
            onParamsChange={onParamsChange}
          />
          <JobsPagination 
            page={page}
            onPageChange={onPageChange}
            hasNextPage={hasNextPage}
          />
          <Jobs 
            params={params}
            page={page}
          />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
