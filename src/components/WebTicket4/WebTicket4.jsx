import CSS from './index.module.css'
import barcode from '/barcode.jpeg'
import { useEffect, useState } from 'react'
import names from '../../../public/names'
import cities from '../../../public/cities'
import moment from 'jalali-moment'
import taban from "/taban.png"
import mahan from "/mahan.png"
import iranAirLogo from "/iranAir.png"
import aseman from '/asemanLogo.png'
import ata from '/ata.png'
import airLinesString from '../../../public/airlines'


function WebTicket4({ from, airline }) {
    const imageObj = {
        taban,
        mahan,
        iranAirLogo,
        aseman,
        ata
    }
    const [nameNum, setNameNum] = useState(names[Math.floor(Math.random() * names.length)])
    const [ticketCode, setTicketCode] = useState(generateRandomNumber(6))
    const [barcodeNum, setBarcodeNum] = useState(generateRandomNumber(8))
    const [refrence, setRefrence] = useState(generateRandomCode(5))
    const [city, setCity] = useState(cities[Math.floor(Math.random() * cities.length)])
    const [day, setDay] = useState(`${Math.floor(Math.random() * 30 + 1)}`.padStart(2, "0"))
    const [month, setMonth] = useState(`${Math.floor(Math.random() * 12 + 1)}`.padStart(2, "0"))
    const [dayString, setDayString] = useState(moment(`1402-${month}-${day}`, 'jYYYY-jMM-jDD').format('dddd'))
    const price = `${((Math.floor(Math.random() * ((city.priceEnd - city.priceStart) + 1))) + city.priceStart)}000`
    const gregorianDate = moment(`1402/${month}/${day}`, 'jYYYY/jMM/jDD').format('DD/MM/YYYY');
    const [time, setTime] = useState((from) ? Math.floor(Math.random() * (4) + 5) : Math.floor(Math.random() * (8) + 15))

    const obj = {
        Saturday: "شنبه",
        Sunday: "یکشنبه",
        Monday: "دوشنبه",
        Tuesday: "سه شنبه",
        Wednesday: "چهارشنبه",
        Thursday: "پنجشنبه",
        Friday: "جمعه"
    }

    useEffect(() => {
        if (dayString === "Friday") {
            setDay(prev => +prev + 1)
        }
    }, [dayString])

    useEffect(() => {
        setDayString(moment(`1402-${month}-${day}`, 'jYYYY-jMM-jDD').format('dddd'))
    }, [day])


    function generateRandomNumber(length) {
        const characters = '0123456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    }

    function generateRandomCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    }

    return (
        <div className={CSS.asemanTicket}>
            <div className={CSS.top}>
                <div className={CSS.topBarcode}>
                    <div className={CSS.barcode}>
                        <img src={barcode} alt="" />
                        <p className={CSS.center}>{barcodeNum}</p>
                    </div>
                    <div className={CSS.flex}>
                        <p>نام مسافر</p>
                        <p>(ADL){nameNum.nameEN}</p>
                    </div>
                    <div className={CSS.flex}>
                        <p>شماره بلیت:</p>
                        <p>{ticketCode}</p>
                    </div>
                    <div className={CSS.flex}>
                        <p>مبلغ قابل پرداخت:</p>
                        <p>{`${(+price)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                    </div>
                </div>
                <div style={{ paddingLeft: "40px" }}>
                    <div className={CSS.flex}>
                        <p>رفرنس:</p>
                        <p>{refrence}</p>
                    </div>
                    <div className={CSS.flex}>
                        <p>مبلغ بلیت پایه:</p>
                        <p>{`${(+price)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                    </div>
                </div>
                <div className={CSS.logoDiv}>
                    <img src={imageObj[airline]} alt="" />
                    <div className={CSS.flex}>
                        <p>تاریخ صدور بلیت:</p>
                        <p>1402/{month}/{`${day - 1}`.padStart(2, "0")}</p>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <th>مبدا</th>
                    <th>مقصد</th>
                    <th>خط هوایی</th>
                    <th>شناسه نرخی</th>
                    <th>شماره پرواز</th>
                    <th>روز پرواز</th>
                    <th>تاریخ شمسی</th>
                    <th>تاریخ میلادی</th>
                    <th>ساعت پرواز</th>
                </thead>
                <tbody>
                    <tr>
                        {(from) ?
                            <>
                                <td>تهران</td>
                                <td>{city.city}</td>
                            </>
                            :
                            <>
                                <td>{city.city}</td>
                                <td>تهران</td>
                            </>

                        }

                        <td>{airLinesString[airline].nameFA}</td>
                        <td>7</td>
                        <td>{generateRandomNumber(4)}</td>
                        <td>{obj[dayString]}</td>
                        <td>1402/{month}/{day}</td>
                        <td>{gregorianDate}</td>
                        <td>{`${time}`.padStart(2, "0")}:00</td>
                    </tr>
                </tbody>
            </table>
            <div style={{ padding: "20px" }}>
                <div className={CSS.flex}>
                    <p style={{ padding: "0 2.5px", fontWeight: "bold", fontSize: "11px" }}>J C Y H V</p>
                    <div className={CSS.flex} style={{ gap: "0" }}>
                        <p className={CSS.textColor} style={{ backgroundColor: "#EDEDED" }}>تا ۲۴ ساعت قبل از پرواز ۲۰٪</p>
                        <p className={CSS.textColor} style={{ backgroundColor: "#FFFF54" }}>از ۲۴ ساعت قبل از پرواز به بعد ۴۰٪</p>
                    </div>
                </div>
                <div className={CSS.flex}>
                    <p style={{ fontWeight: "bold", fontSize: "11px" }}>Q M N L O</p>
                    <div className={CSS.flex} style={{ gap: "0" }}>
                        <p className={CSS.textColor} style={{ backgroundColor: "#F8E5D8" }}>تا ۲۴ ساعت قبل از پرواز ۲۵٪</p>
                        <p className={CSS.textColor} style={{ backgroundColor: "#EDEDED" }}>از ۲۴ ساعت قبل از پرواز به بعد ۵۰٪</p>
                    </div>
                </div>
            </div>

            <div style={{ padding: "5px" }}>
                <p className={CSS.bold}>رعایت موارد ذیل در پرواز های داخلی الزامی خواهد بود:</p>
                <p>حضور مسافر در فرودگاه ۱ ساعت و نیم قبل از پرواز</p>
                <p>ارائه کارت شناسایی عکس دار و معتبر جهت پذیرش بلیط و سوار شدن به هواپیما و استرداد بلیت</p>
                <p>از قرار دادن دوربین،موبایل،نوت بوک،اشیاء گرانبها و مدارک مهم در بسته های تحویلی به هواپیما خودداری فرمایید
                    .
                    براساس مقررات،شرکت هواپیمایی در خصوص مفقود شدن موارد فوق هیچگونه
                    مسئولیتی ندارد.</p>
                <br />
                <p className={CSS.bold}>
                    شرایط کلی حمل مسافر و توشه پذیرش شده:
                </p>
                <p>بلیت الکترونیک
                    :
                    سند و توافق قراردادی فی مابین مسافر و شرکت حمل کننده می باشد و تبیین کننده حدود و مسئولیت های قراردادی طرفین می باشد</p>
                <p>حمل
                    :
                    مترادف است با حمل و نقل هوایی</p>
                <p>حمل کننده
                    :
                    یعنی کلیه شرکت های حمل کننده هوایی که طبق این شرایط عهده دار حمل مسافر یا توشه وی بوده و با ارائه هر گونه خدمات دیگر مربوط به این نوع ترابری اقدام به حمل مسافر یا توشه وی
                    می نماید</p>
                <p>پیمان ورشو
                    :
                    منظور قانون اجازه الحاق دولت ایران به کنوانسیون بیست و یکم اکتبر سال هزار و نهصد و بیست و نه ورشو مصوب سال هزار و سیصد و پنجاه و چهار در موضوع یکسان نمودن مقررات حمل و
                    نقل بین المللی هوایی و قانون تعیین حدود مسئولیت شرکت های هواپیمایی ایران در پرواز های داخل کشور مصوب سال هزار و سیصد و شصت و چهار مجلس شورای اسلامی ایران می باشد
                    .
                    حمل و نقلی
                    که طبق این شرایط انجام میگیرد تابع مقررات محدودیت های مربوط به مسئولیت های مقرر در پیمان ورشو خواهد بود.</p>
                <p>شرکت حمل کننده می تواند بدون اطلاع،اقدام به تعویض شرکت های حمل کننده یا هواپیما،و در صورت لزوم اقدام به تغییر و یا حذف نقاط توقف مندرج در این بلیت نماید
                    .
                    برنامه های پروازی بدون اطلاع
                    قبلی قابل تغییر می باشند</p>
                <p>مسافر موظف به رعایت الزامات دولتی برای سفر،ارائه اسناد ورود و خروج و سایر مدارک لازم می باشد و ملزم است در راس ساعتی که از طرف شرکت حمل کننده مقرر
                    گردیده
                    برای
                    انجام تشریفات پرواز در
                    فرودگاه حضور یابد
                    .
                    هیچ پروازی به علت عدم حضور مسافر در موعد مقرر به تاخیر نخواهد افتاد و در این گومه موارد هیچگونه مسئولیتی پذیرفته نخواهد شد
                    .
                    کارگزاران،کارمندان یا نمایندگان شرکت حمل
                    کننده تحت هیچ شرایطی مجاز به تغییر، اصلاح یا صرف نظر کردن از مفاد این قرارداد نخواهند بود.</p>
                <p>مالیات ها و عوارض دولتی بهای این بلیت می تواند شامل مالیات و عوارضی باشد که توسط مراجع زیر صلاح دولتی در ارتباط با حمل و نقل هوایی وزن شده اند
                    .
                    مالیات ها و عوارض در هزینه حمل و نقل
                    لحاظ و یا به طور مجزا در قسمت مالیات
                    /
                    عوارض این بلیت درج گردیده است
                    .
                    مسافر ملزم به پرداخت مالیات و یا عوارضی خواهد بود که ممکن است از وی دریافت نشده باشد</p>
                <p>بلیت مسافر غیر قابل انتقال می باشد و مسافر با خرید و ارائه آن تمام شرایط قرارداد را بدون استثنا قبول نموده است</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "50px" }}>
                <p className={`${CSS.bold} ${CSS.center}`} style={{ width: "75%", margin: "auto" }}>لطفا توجه فرمایید
                    !
                    در صورت هرگونه دستکاری یا فروش با نرخی بیش از نرخ مصوب موضوع از طریق مراجع
                    قضایی پیگیری خواهد شد</p>
                <p className={`${CSS.bold} ${CSS.center}`} style={{ width: "50%", margin: "auto" }}>
                    سفر خوشی را برای شما آرزو می کند
                    .
                    جهت ارتباط با ما
                    mojzamam
                    شماره
                    02133124349
                    تماس بگیرید
                </p>
            </div>

        </div>
    )
}

export default WebTicket4