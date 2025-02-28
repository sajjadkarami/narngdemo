import logo from '../assets/logo.png'
import enamad from '../assets/logo-enamad.png'
import saman from '../assets/logo-saman.png'

export default function SiteFooter() {
    return <div>
        <div className='icons'>
            <img src={enamad} />
            <img src={saman} />
        </div>
        <div className='brand'>
            <img src={logo} width={"200px"} height={"70px"} />
            <p>پلتفرم تخصصی کسب و کار</p>
        </div>
        <div class="buttons">
            <button>معرفی نارنج</button>
            <button>راه کارها و خدمات</button>
            <button>ارتباط با ما</button>
            <button> قوانین و مقررات</button>
        </div>
        <div className='copy-right'>
            تمامی حقوق محفوظ است و هر نوع کپی برداری از محتوای این وب سایت پیگرد قانونی دارد.
        </div>
    </div>
}