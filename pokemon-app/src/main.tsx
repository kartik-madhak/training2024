import ReactDOM from 'react-dom/client'
import CustomRouter from './CustomRouter'

const root = document.getElementById('root')
if (root === null) {
  throw new Error('Root element not found')
}
ReactDOM.createRoot(root).render(
    <CustomRouter/>
)
