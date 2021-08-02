import { Button } from '@material-ui/core';
import axios from 'axios';

const Container = () => {

  const fetchData = () => {

    axios.get('http://localhost:3535/')
      .then(response => {
        console.log(response.data);
      }) 
      .catch(error => {
        console.log(error);
      }); 
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary" onClick={fetchData}>
          Pantallazo
        </Button>
      </header>
    </div>
  );
};

export default Container;
