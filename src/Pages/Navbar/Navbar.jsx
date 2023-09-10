import s from './Navbar.module.css'
import { MyLinkButton, NameLesson } from './../../mystyle.jsx'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      {/* <NameLesson /> */}
      <MyLinkButton link='/'>MENU</MyLinkButton>
      <MyLinkButton link='/'>CRUD</MyLinkButton>
      <MyLinkButton link='/'>AUTHENTICATION</MyLinkButton>
    </div>
  )
}

export default Navbar 
