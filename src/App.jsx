import AppHeader from './components/ui/AppHeader'
import AppFooter from './components/ui/AppFooter'
import Layout from "./components/ui/Layout"
import Meals from './components/meal/Meals'
import { createPortal } from 'react-dom'
import Notification from './components/notification/Notification'

export default function App() {
  return (
    <Layout 
      appheader={<AppHeader/>}
      appfooter={<AppFooter/>}
    >
      <Meals/>
      {
        createPortal(<Notification></Notification>, document.querySelector('#notification'))
      }
    </Layout>
  )
}