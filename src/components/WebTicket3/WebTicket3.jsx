import { useEffect, useState } from 'react'
import CSS from './index.module.css'
import QR from '/qrCode.png'
import names from '../../../public/names'
import cities from '../../../public/cities'
import moment from 'jalali-moment'
import taban from "/taban.png"
import mahan from "/mahan.png"
import iranAirLogo from "/iranAir.png"
import aseman from '/asemanLogo.png'
import ata from '/ata.png'
import airLinesString from '../../../public/airlines'


function WebTicket3({ from , airline}) {
    const imageObj = {
        taban,
        mahan,
        iranAirLogo,
        aseman,
        ata
    }
    const [nameNum, setNameNum] = useState(names[Math.floor(Math.random() * names.length)])
    const [ticketCode, setTicketCode] = useState(generateRandomNumber(7))
    const [pnr, setPnr] = useState(generateRandomCode(6))
    const [city, setCity] = useState(cities[Math.floor(Math.random() * cities.length)])
    const [time, setTime] = useState((from) ? Math.floor(Math.random() * (4) + 5) : Math.floor(Math.random() * (8) + 15))
    const price = `${((Math.floor(Math.random() * ((city.priceEnd - city.priceStart) + 1))) + city.priceStart)}000`
    const tax = `${(+price * 9) / 100}`
    const [day, setDay] = useState(`${Math.floor(Math.random() * 30 + 1)}`.padStart(2, "0"))
    const [month, setMonth] = useState(`${Math.floor(Math.random() * 12 + 1)}`.padStart(2, "0"))
    const gregorianDate = moment(`1402/${month}/${day}`, 'jYYYY/jMM/jDD');
    const [dayString, setDayString] = useState(moment(`1402-${month}-${day}`, 'jYYYY-jMM-jDD').format('dddd'))

    const obj = {
        Saturday: "شنبه",
        Sunday: "یکشنبه",
        Monday: "دوشنبه",
        Tuesday: "سه شنبه",
        Wednesday: "چهارشنبه",
        Thursday: "پنجشنبه",
        Friday: "جمعه"
    }
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

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
        <div className={`${CSS.mahanTicket} page-break`}>
            <p className={CSS.title}>Travel Itenlrary</p>
            <div className={CSS.topBox}>
                <div className={CSS.topBox__logo}>
                    <img src={imageObj[airline]} alt="" />
                </div>
                <div className={CSS.topBox__left}>
                    <p dir='ltr'><span>DATE OF ISSUE:  </span> {monthArr[new Date(gregorianDate).getMonth()]} {`${new Date(gregorianDate).getDate()}`.padStart(2, "0")} {new Date(gregorianDate).getFullYear()}</p>
                    <p dir='ltr'><span>VOUCHER:</span> {generateRandomNumber(7)}   /  فروش نقدی اینترنتی</p>
                    <p dir='ltr'><span>PNR: </span>  {pnr}</p>
                </div>
            </div>
            <div className={CSS.idCard}>
                <p>کد ملی / Id Card</p>
                <p style={{ width: "40%", textAlign: "left" }}>نام مسافر / Passenger Name</p>
                <p>شماره بلیت / Ticket No</p>
            </div>
            <div className={CSS.values}>
                <p>{nameNum.ID}</p>
                <p className={CSS.valueName} style={{ width: "40%", textAlign: "left" }}>{(nameNum.nameEN).toUpperCase()}</p>
                <p>{ticketCode}</p>
            </div>
            <table className={CSS.headTable}>
                <thead>
                    <th>Status</th>
                    <th>بار /Bag</th>
                    <th>Class</th>
                    <th>پرواز /Flight</th>
                    <th>هواپیمایی /Air Line</th>
                    <th>مقصد/ To</th>
                    <th>مبدا /From</th>
                </thead>
                <tbody>
                    <tr>
                        <td>OK</td>
                        <td>20KG</td>
                        <td>Y</td>
                        <td style={{ fontWeight: "bold" }}>{generateRandomNumber(4)}</td>
                        <td>{airLinesString[airline].nameFA}</td>
                        {(from) ?
                            <>
                                <td>تهران/<span style={{ fontWeight: "bold", margin: "0" }}>Tehran</span></td>
                                <td>{city.city}/<span style={{ fontWeight: "bold", margin: "0" }}>{city.cityEN}</span></td>
                            </>
                            :
                            <>
                                <td>{city.city}/<span style={{ fontWeight: "bold", margin: "0" }}>{city.cityEN}</span></td>
                                <td>تهران/<span style={{ fontWeight: "bold", margin: "0" }}>Tehran</span></td>
                            </>

                        }

                    </tr>
                </tbody>
            </table>
            <div className={CSS.placeAndTime}>
                <div className={CSS.place}>
                    <p>محل صدور</p>
                    <p>Issue Place</p>
                </div>
                <img src={QR} alt="" className={CSS.qrCode} />
                <div className={CSS.time}>
                    <div style={{ padding: " 0 32px" }}>
                        <p>زمان/Time</p>
                        <p>تاریخ/Date</p>
                    </div>

                    <div>
                        <p style={{ fontWeight: "bold" }}>
                            {`${time}`.padStart(2, "0")}:00
                        </p>
                        <div dir='ltr'>
                            <p style={{ fontWeight: "bold" }}>{new Date(gregorianDate).getDate()}{monthArr[new Date(gregorianDate).getMonth()]}/1402/{month}/{day}</p>
                            <p>{obj[dayString]}/{dayString}</p>
                        </div>
                    </div>

                    <div>
                        <p>Payment</p>
                        <p>بهاء فروش /Fare</p>
                    </div>
                    <div style={{ border: "none" }}>
                        <p>cash</p>
                        <p>invoice: {`${(+price)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                    </div>
                </div>
            </div>

            <div className={CSS.desc}>
                <div style={{ width: "50%" }}>
                    <p>ملاحضات</p>
                    <p>حضور مسافر برای پرواز داخلی 2 ساعت و خارجی 3 ساعت قبل در فرودگاه الزامیست کانتر کنترل 30 دقیقه قبل پرواز داخلی و 90 دقیقه قبل پرواز خارجی بسته خواهد شد</p>
                    <p>تغییر نام و یا انتقال به غیر مجاز نمی باشد</p>
                    <p>پروازهای داخلی شرکت های ایران ایر معراج اتا ایرتور نفت و قشم از ترمینال 2 مهراباد و زاگرس کیش ایر از ترمینال 1 و دیگر شرکتها از ترمینال 4 انجام می شود</p>
                </div>
                <div dir='ltr' style={{ width: "40%" }}>
                    <p>Notice</p>
                    <p>_ Presence 3:00 befor flight time at the airport is
                        mandatory</p>
                    <p>_For domestic flight,counter closing time is 90minutes
                        before</p>
                    <p>departure of flight</p>
                    <p>_Refund is only permited in issuingagancy</p>
                    <p>_Can not be transferred to anyone else and no name
                        chang is possible</p>
                </div>
            </div>
        </div>
    )
}

export default WebTicket3