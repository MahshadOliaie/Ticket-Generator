import { useEffect, useState } from "react"
import taban from "/taban.png"
import mahan from "/mahan.png"
import iranAirLogo from "/iranAir.png"
import aseman from '/asemanLogo.png'
import ata from '/ata.png'
import { useNavigate } from "react-router-dom"


function Dashboard({ blitCount, selectedAirline, setBlitCount, setSelectedAirline }) {
    const nav = useNavigate()
    const [activeBtn, setActiveBtn] = useState(false)

    async function handleNav() {
        await nav('/tickets')
        setTimeout(print, 1000)
    }

    function print() {
        window.print()
    }

    useEffect(() => {
        if (blitCount > 0 && selectedAirline != "") {
            setActiveBtn(true)
        }
        else
            setActiveBtn(false)

    }, [blitCount, selectedAirline])

    function handleClick(airline) {
        setSelectedAirline(airline)
    }

    function handleChange() {
        setBlitCount(event.target.value)
    }

    return (
        <>
            <div className='blitAirline'>
                <h1 className='airlineTitle'>انتخاب شرکت هواپیمایی</h1>
                <div className="images">
                    <div className='images__image' onClick={() => { handleClick("taban") }} id={(selectedAirline == "taban") ? "active" : ""}>
                        <img src={taban} alt="" />
                    </div>
                    <div className='images__image' onClick={() => { handleClick("mahan") }} id={(selectedAirline == "mahan") ? "active" : ""}>
                        <img src={mahan} alt="" />
                    </div>
                    <div className='images__image' onClick={() => { handleClick("iranAirLogo") }} id={(selectedAirline == "iranAirLogo") ? "active" : ""}>
                        <img src={iranAirLogo} alt="" />
                    </div>
                    <div className='images__image' onClick={() => { handleClick("aseman") }} id={(selectedAirline == "aseman") ? "active" : ""}>
                        <img src={aseman} alt="" />
                    </div>
                    <div className='images__image' onClick={() => { handleClick("ata") }} id={(selectedAirline == "ata") ? "active" : ""}>
                        <img src={ata} alt="" />
                    </div>
                </div>
            </div>
            <div className='blitCount'>
                <h1 className='airlineTitle'>تعداد بلیت</h1>
                <input type="number" className='countInput' onChange={handleChange} />
            </div>

            <div className={(activeBtn) ? "submit activeSubmit" : "submit notActiveSubmit"} onClick={handleNav}>
                <p>ساخت بلیت</p>
            </div>
        </>
    )
}

export default Dashboard