import logo from '../assets/logo.png'

export default function Header() {
    return <div className='header'>
        <img src={logo} className='logo'></img>
        <button id='login'>ورود</button>
    </div>
}