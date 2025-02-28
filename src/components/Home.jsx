import city from '../assets/city.jpg'
import { Select } from 'antd'
import { cities } from '../constant'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    let navigate = useNavigate();
    function onchange(id) {
        navigate(`/products/${id}`);
    }

    return (
        <>
            <div className='main-img-container'>
                <div id='chooseCity'>
                    <h3 className='selectTitle'>شهر خودت را انتخاب کن</h3>
                    <Select optionFilterProp="label" placeholder='انتخاب شهر' notFoundContent={<div>درست سرچ کن!</div>} showSearch className='select' options={cities} onSelect={onchange} >
                    </Select>
                </div>
                <img src={city} width={"100%"} height={"100%"} id='background' />

            </div >
            <div className='cards'>
                <div className='card'>
                    <div className='card-title'> پلتفرم تخصصی کسب و کار </div>
                    <p className='card-info'>نارنج مکانی برای همه است. واردکنندگان، تولیدکنندگان، واسطه ها، فروشنده ها و خریداران، همه در نارنج جایگاه ویژه ای دارند و از امکانات بی نظیری برخوردار هستند.</p>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        جستجوی کالا و خدمات
                    </div>
                    <p className='card-info'>
                        در اینجا میتوانید فروشگاه ها و شرکت های مختلفی را پیدا کنید، نظرات مردم را درباره آنها بخوانید و به درستی انتخاب کنید. پیدا کردن کالا یا خدمات در هر شهری دیگر سخت و پیچیده نیست. هرچیزی که نیاز دارید را در نارنج جستجو کنید.
                    </p>
                    <p className='card-info-extra'>
                        در نارنج همه فروشنده ها توسط خریداران مورد ارزیابی قرار میگیرند و تمام معاملات در بستر نارنج صورت میگیرد و امکان هر نوع کلاهبرداری کاهش پیدا میکند.
                    </p>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        صاحبان کسب و کار
                    </div>
                    <div className='card-info'>
                        در نارنج به امکانات مدیریت محصولات و انبار، حسابداری و بسیاری از قابلیت های دیگر دسترسی دارید. میتوانید در نارنج کالاهای خود را به فروش برسانید و سفارش ها را از ابتدا تا انتها مدیریت کنید. از طرفی، تمام کاربران ما میتوانند کالاهای فروشی شما را پیدا کنند و شما به یک بازار بزرگ و پر از مشتری دسترسی دارید. شما میتوانید برای کالاهای خود تبلیغات کنید تا فروش بیشتری داشته باشید. تمام این قابلیت ها همه در یک پنل در اختیار شما قرار گرفته اند.
                    </div>
                </div>
            </div>
        </>
    )
}