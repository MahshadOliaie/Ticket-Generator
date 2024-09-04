import CSS from './index.module.css'
import flightio from '/FLIGHTIO.png'
import { useEffect, useState } from 'react'
import names from '../../../public/names'
import cities from '../../../public/cities'
import moment from 'jalali-moment'
import taban from "/taban.png"
import mahan from "/mahan.png"
import iranAirLogo from "/iranAir.png"
import aseman from '/asemanLogo.png'
import ata from '/ata.png'

function WebTicket2({ from , airline }) {
    const imageObj = {
        taban,
        mahan,
        iranAirLogo,
        aseman,
        ata
    }
    const obj = {
        Saturday: "شنبه",
        Sunday: "یکشنبه",
        Monday: "دوشنبه",
        Tuesday: "سه شنبه",
        Wednesday: "چهارشنبه",
        Thursday: "پنجشنبه",
        Friday: "جمعه"
    }
    const [nameNum, setNameNum] = useState(names[Math.floor(Math.random() * names.length)])
    const [city, setCity] = useState(cities[Math.floor(Math.random() * cities.length)])
    const [time, setTime] = useState((from) ? Math.floor(Math.random() * (4) + 5) : Math.floor(Math.random() * (8) + 15))
    const [reserveCode, setReserveCode] = useState(generateRandomCode(6))
    const [day, setDay] = useState(`${Math.floor(Math.random() * 30 + 1)}`.padStart(2, "0"))
    const [month, setMonth] = useState(`${Math.floor(Math.random() * 12 + 1)}`.padStart(2, "0"))
    const [dayString, setDayString] = useState(moment(`1402-${month}-${day}`, 'jYYYY-jMM-jDD').format('dddd'))
    const price = `${((Math.floor(Math.random() * ((city.priceEnd - city.priceStart) + 1))) + city.priceStart)}000`
    const tax = `${(+price * 3) / 100}`
    const [ticketCode, setTicketCode] = useState(generateRandomNumber(8))

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
        <>
            <div className={CSS.iranAir}>
                <div className={CSS.iranAir__header}>
                    <img src={flightio} alt="" />
                    <div className={CSS.contact}>
                        <p><span>تلفن: </span>41501-021</p>
                        <p><span>ایمیل: </span>support@flightio.com</p>
                    </div>
                </div>
                <p style={{ margin: "0 5px" }}>پرواز رفت
                    : {" "}
                    {obj[dayString] + "  "}
                    1402/{month}/{day}</p>
                <div className={CSS.iranAir__topBox}>
                    <div className={CSS.iranAir__logo}>
                        <img src={imageObj[airline]} alt="" />
                    </div>
                    <div className={CSS.iranAir__middle}>
                        <div className={CSS.iranAir__middle__top}>
                            {(from) ?
                                <p>Tehran</p>
                                :
                                <p>{city.cityEN}</p>
                            }
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1317 0.166709L6.74825 9.62983C5.68871 9.57125 3.3281 9.55046 2.89227 9.5957C-0.7612 9.97493 0.933628 12.3219 2.57258 12.3268C3.02084 12.3282 5.34188 12.3861 6.88925 12.3779L14.3324 21.5751L16.5237 21.5771L11.7798 12.052L18.5736 11.6357L20.6532 14.3904L22.0873 14.3933L20.9271 10.7427L20.9389 10.7418L21.6865 7.03329L20.2567 7.09222L18.4924 9.92239L11.6658 9.76682L15.3148 0.0804284L13.1317 0.166709Z" fill="black" />
                            </svg>
                            {(from) ?
                                <p>{city.cityEN}</p>
                                :
                                <p>Tehran</p>

                            }
                        </div>
                        <div className={CSS.iranAir__middle__bottom}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>زمان حرکت</p>
                                <p>{`${time}`.padStart(2, "0")}:00</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}>زمان رسیدن</p>
                                <p>{`${time + (Math.floor(city.timeMin / 60))}`.padStart(2, "0")}:{`${(city.timeMin % 60)}`.padStart(2, "0")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={CSS.iranAir__endBox}>
                        <p><span>بار مجاز کلاس اکونومی: </span>20 کیلوگرم</p>
                        <p><span>کلاس بیزینس: </span>30 کیلوگرم</p>
                        <p style={{ fontWeight: "bold" }}><span style={{ fontWeight: "normal" }}>کلاس پروازی: </span>Economy-Y</p>
                        <p style={{ fontWeight: "bold" }}><span style={{ fontWeight: "normal" }}>شماره رزرو (PNR): </span>{reserveCode}</p>
                        <p><span>تاریخ صدور: </span> 1402/{month}/{`${day - 1}`.padStart(2, "0")}</p>
                    </div>
                </div>
                <p style={{ margin: "0 5px" }}>
                    اطلاعات مسافرین
                </p>
                <div className={CSS.titles}>
                    <p>رده سنی</p>
                    <p>نام و نام خانوادگی</p>
                    <p>شماره بلیط</p>
                    <p>قیمت بلیط</p>
                </div>
                <div className={CSS.titles}>
                    <p>بزرگسال</p>
                    <p>{nameNum.nameFA}</p>
                    <p>{ticketCode}</p>
                    <p>{`${(+price) + (+tax)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ریال</p>
                </div>

                <div className={CSS.prices}>
                    <div>
                        <p>مبلغ پایه: </p>
                        <p><span style={{ fontWeight: "bold" }}>{price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> ریال</p>
                    </div>
                    <div>
                        <p>هزینه خدمات: </p>
                        <p><span style={{ fontWeight: "bold" }}>{tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> ریال</p>
                    </div>
                    <div>
                        <p>مبلغ نهایی: </p>
                        <p><span style={{ fontWeight: "bold" }}>{`${(+price) + (+tax)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> ریال</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebTicket2