import React from 'react';
import { showErrorMessage, showInfoMessage, showSuccessMessage, showWarningMessage } from './helpers/exceptionUtils';
import './static/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test some notifications
        </p>

        <button onClick={() => showInfoMessage("This is an info message", "here is the subtext! look how nice it is")}>Show Info</button><br />
        <button onClick={() => showErrorMessage("This is an error message", "here is the subtext! look how nice it is")}>Show Error</button><br />
        <button onClick={() => showSuccessMessage("This is a success message", "here is the subtext! look how nice it is")}>Show Success</button><br />
        <button onClick={() => showWarningMessage("This is an warning message", "here is the subtext! look how nice it is")}>Show Warning</button><br />

      </header>
    </div>
  );
}

export default App;
