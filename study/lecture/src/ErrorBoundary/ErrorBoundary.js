import React, { useState } from 'react';

const ErrorBoundary = (props) => {
  const [errorState, setErrorState] = useState({
    hasError: false,
    errorMessage: ''
  });

  const componentDidCatch = (error, info) => {
    setErrorState({hasError:true, errorMessage: error})
  }

  if(errorState.hasError){
    return <h1>{errorState.errorMessage}</h1> 
  }else{
    return props.children;
  }
}

export default ErrorBoundary;