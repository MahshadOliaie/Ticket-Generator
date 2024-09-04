import logo from '/taban.png'
import barcode from '/barcode.png'
import cities from '../../../public/cities'
import { useState } from 'react'
import names from '../../../public/names'
import moment from 'jalali-moment';
import taban from "/taban.png"
import mahan from "/mahan.png"
import iranAirLogo from "/iranAir.png"
import aseman from '/asemanLogo.png'
import ata from '/ata.png'
import airLinesString from '../../../public/airlines'

function WebTicket1({ from, airline }) {
    const imageObj = {
        taban,
        mahan,
        iranAirLogo,
        aseman,
        ata
    }
    const [city, setCity] = useState(cities[Math.floor(Math.random() * cities.length)])
    const [nameNum, setNameNum] = useState(names[Math.floor(Math.random() * names.length)])
    const [flightCode, setFlightCode] = useState(generateRandomCode(7))
    const [ticketCode, setTicketCode] = useState(generateRandomNumber(7))
    const [marjaCode, setMarjaCode] = useState(generateRandomCode(8))
    const price = `${((Math.floor(Math.random() * ((city.priceEnd - city.priceStart) + 1))) + city.priceStart)}000`
    const tax = `${(+price * 9) / 100}`
    const [day, setDay] = useState(`${Math.floor(Math.random() * 30 + 1)}`.padStart(2, "0"))
    const [month, setMonth] = useState(`${Math.floor(Math.random() * 12 + 1)}`.padStart(2, "0"))
    const [time, setTime] = useState((from) ? Math.floor(Math.random() * (4) + 5) : Math.floor(Math.random() * (8) + 15))
    const gregorianDate = moment(`1402/${month}/${day}`, 'jYYYY/jMM/jDD').format('DD/MM/YYYY');

    function generateRandomCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    }

    function generateRandomNumber(length) {
        const characters = '0123456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    }

    return (
        <>
            <div className='ticket page-break'>
                <div className="header flex">
                    <div className="header__name flex">
                        <p className="nameF">{nameNum.nameFA}</p>
                        <p className="age">(بزرگسال)</p>
                    </div>
                    <p className="nameE">{nameNum.nameEN}</p>
                </div>
                <div className="topBox">
                    <div className="flightInfo">
                        <div className="flightInfo__header flex">
                            <p className="flightInfo__header__right">اطلاعات پرواز</p>
                            <p className="flightInfo__header__left" dir="ltr">Flight info</p>
                        </div>
                        <div className="flightInfo__body">
                            <div className="mabda">
                                <div className="mabdaT flex">
                                    <p>مبدا:</p>
                                    <p>:from</p>
                                </div>
                                <div className="mabdaB flex">
                                    {(from) ?
                                        <>
                                            <p className="bold">تهران</p>
                                            <p className="bold">Tehran</p></>
                                        :
                                        <>
                                            <p className="bold">{city.city}</p>
                                            <p className="bold">{city.cityEN}</p></>
                                    }

                                </div>
                                <div className="terminal flex">
                                    <p>ترمینال</p>
                                    <p>--</p>
                                </div>
                            </div>
                            <div className="maqsad">
                                <div className="maqsadT flex">
                                    <p>مقصد:</p>
                                    <p>:To</p>
                                </div>
                                <div className="maqsadB flex">
                                    {(from) ?
                                        <>
                                            <p className="bold">{city.city}</p>
                                            <p className="bold">{city.cityEN}</p></>
                                        :
                                        <>
                                            <p className="bold">تهران</p>
                                            <p className="bold">Tehran</p></>
                                    }

                                </div>
                            </div>
                            <div className="devider"></div>
                            <div className="date">
                                <div className="dateT flex">
                                    <p>تاریخ پرواز:</p>
                                    <p>:Flight Date</p>
                                </div>
                                <div className="dateB flex">
                                    <p className="bold">1402/{month}/{day}</p>
                                    <p className="bold">{gregorianDate}</p>
                                </div>
                            </div>
                            <div className="time">
                                <div className="timeT flex">
                                    <p>ساعت پرواز:</p>
                                    <p>:Flight Time</p>
                                </div>
                                <div className="timeB flex">
                                    <p className="bold">{`${time}`.padStart(2, "0")}:00</p>
                                    <p className="bold">{`${time}`.padStart(2, "0")}:00</p>
                                </div>
                            </div>
                            <div className="arrive">
                                <div className="arriveT flex" style={{ marginTop: "50px" }}>
                                    <p>ساعت رسیدن:</p>
                                    <p>:Arrival Time</p>
                                </div>
                                <div className="arriveB flex">
                                    <p className="bold">{`${time + (Math.floor(city.timeMin / 60))}`.padStart(2, "0")}:{`${(city.timeMin % 60)}`.padStart(2, "0")}</p>
                                    <p className="bold">{`${time + (Math.floor(city.timeMin / 60))}`.padStart(2, "0")}:{`${(city.timeMin % 60)}`.padStart(2, "0")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticketInfo">
                        <div className="ticketInfo__header flex">
                            <p className="ticketInfo__header__right">اطلاعات بلیط</p>
                            <p className="ticketInfo__header__left" dir="ltr">Ticket info</p>
                        </div>
                        <div className='ticketInfo__body'>
                            <div className="airline">
                                <div className="airlineT flex">
                                    <p>ایرلاین:</p>
                                    <p>:Airline</p>
                                </div>
                                <div className="airlineB flex">
                                    <p className="bold">{airLinesString[airline].nameFA}</p>
                                    <p className="bold">{airLinesString[airline].nameEn}</p>
                                </div>
                            </div>
                            <div className="deviderLeft"></div>
                            <div className="model">
                                <div className="modelT flex">
                                    <p>مدل هواپیما:</p>
                                    <p>:Airplane Model</p>
                                </div>
                                <div className="modelB flex">
                                    <p className="bold">--</p>
                                    <p className="bold">--</p>
                                </div>
                            </div>
                            <div className="deviderLeft"></div>

                            <div className="class">
                                <div className="classT flex">
                                    <p>کلاس کابین:</p>
                                    <p>:Cabin Class</p>
                                </div>
                                <div className="classB flex">
                                    <p className="bold">اکونومی</p>
                                    <p className="bold">Economy</p>
                                </div>
                            </div>

                            <div className="bar">
                                <div className="barT flex">
                                    <p>بار مجاز:</p>
                                    <p>:Allowed Loggage</p>
                                </div>
                                <div className="barB flex">
                                    <p className="bold">--</p>
                                    <p className="bold">--</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="logos">
                        <img src={imageObj[airline]} alt="" />
                        <p>شماره پرواز / Flight Number</p>
                        <p className='bold'>{flightCode}</p>
                        <p style={{ marginBottom: "44px" }}>چارتری</p>
                        <p>شماره بلیط /Ticket Number</p>
                        <p className='bold'>{ticketCode}</p>
                        <p>شماره مرجع /PNR</p>
                        <div className='barcodePack'>
                            <p className="bold">{marjaCode}</p>
                            <img src={barcode} alt="" className='barcode' style={{ height: "30px", width: "140px" }} />
                            <p style={{ marginBottom: "0" }}>{generateRandomNumber(9)}</p>
                        </div>
                    </div>
                </div>
                <div className="bottomBox">
                    <div className="bottomBox__top flex">
                        <div className='bottomBox__top__right'>
                            <p>پرواز داخلی هواپیمایی کاسپین از ترمینال-- فرودگاه انجام می شود</p>
                            <p className='bold'>شرایط جریمه استرداد بلیط کاسپین با شناسه نرخی--</p>
                            <p>
                                در صورت استرداد بلیط، با توجه به موارد زیر،
                                <br />
                                شما جریمه شده و از مبلغ بازگشتی به شما کاسته می شود
                            </p>
                            <div className='bottomBox-Box'>
                                <p>شرایط هنگام استرداد</p>
                                <p>میزان جریمه</p>
                            </div>
                        </div>
                        <div className="bottomBox__top__left">
                            <p className="bold">جزئیات بها:</p>
                            <div className="flex">
                                <p>کد مرجع:</p>
                                <p>{marjaCode}</p>
                            </div>
                            <div className="flex" style={{ marginTop: "-10px" }}>
                                <p>کد بلیط:</p>
                                <p>{ticketCode}</p>
                            </div>
                            <div className='flex' style={{ margin: "20px 0" }}>
                                <p>قیمت پایه</p>
                                <p className="bold">{price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                            </div>
                            <div className="flex">
                                <p>مالیات پرواز</p>
                                <p className="bold">{tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                            </div>
                            <div className="flex totalPrice" style={{ paddingTop: "15px" }}>
                                <p className='bold'>بهای کل</p>
                                <p className="bold">{`${(+price) + (+tax)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottomBox__bottom">
                        <p>مسافر گرامی، لطفا در پرواز‌های داخلی کاسپین موارد زیر را رعایت کنید:</p>
                        <p>
                            *برای سوار شدن به هواپیما، ارائه کارت شناسایی عکس دار ضروری است
                            <br />
                            *برای استرداد بلیط ارائه کارت شناسایی عکس دار ضروری است
                            <br />
                            *دوربین، موبایل، نوت بوک، اشیاء گران بها و مدارک مهم را در بسته‌های تحویلی به هواپیما قرار دهید. براساس قوانین، هواپیمایی جمهوری اسلامی ایران در خصوص مفقود شدن این موارد، هیج مسئولیتی ندارد
                        </p>
                        <p>
                            مسافر گرامی برای سوار شدن به هواپیما نیاز به پرینت بلیت نیست، اما در صورت کنسلی یا تاخیر طولانی مدت برای استرداد وجه لازم است بلیت چاپ
                            شده با مهر ابطال پرواز ارائه گردد.
                            *
                            <br />
                            لطفا برای اطلاع از شرایط استرداد بلیت های چارتری با پشتیبانی (تلفن 43900000)
                            تماس بگیرید. *
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WebTicket1