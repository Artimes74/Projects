import React from 'react';
import TypeScriptStackNavigator from './src/typeScript/route/stack';
import JavaScriptStackNavigator from './src/javaScript/route/stack';

const App = () => {
  // for developers which want to use TYPESCRIPT
  return <TypeScriptStackNavigator />;

  // for developers which want  use JAVASCRIPT
  // return <JavaScriptStackNavigator />;
};

export default App;
