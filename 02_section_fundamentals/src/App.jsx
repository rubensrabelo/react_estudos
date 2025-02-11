import './App.css'

import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'


function App() {

  return (
    <>
      <div className="App">
        <FirstComponent />
        <MyComponent />
        <TemplateExpressions />
        <Events />
        <Challenge />
      </div>
    </>
  )
}

export default App
