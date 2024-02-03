import ReactDOM from 'react-dom/client';
import App from '../src/App'
import '../src/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div id='parent'>
  <App />
</div>)

