import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent} onError = {(error,componentStack)=> {
        // library
      }}>
        <Home/>
      </ErrorBoundary>
    </div>
  );
}

const ErrorFallbackComponent = ({error,resetErrorBoundary}) => {
  return (
    <>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </>
  )
}

export default App;
