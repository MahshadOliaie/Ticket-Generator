import WebTicket4 from "../../WebTicket4/WebTicket4"
import WebTicket1 from "../../WebTicket1/WebTicket1"
import WebTicket2 from "../../WebTicket2/WebTicket2"
import WebTicket3 from "../../WebTicket3/WebTicket3"
import { useEffect, useState } from "react"


function Tickets({ selectedAirline, counter, more }) {
    const [moreCount, setMoreCount] = useState([])

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= (+more / 2); i++) {
            arr.push(i)
        }
        setMoreCount(arr)
    }, [])

    return (
        <div className="Alltickets">
            {
                //raft
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket1 key={index} from={true} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //bargasht
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket1 key={index} from={false} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //raft
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket2 key={index} from={true} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //bargasht
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket2 key={index} from={false} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //raft
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket3 key={index} from={true} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //bargasht
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket3 key={index} from={false} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //raft
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket4 key={index} from={true} airline={selectedAirline} />
                    })
                    :
                    ""
            }
            {
                //bargasht
                (counter.length > 0) ?
                    counter.map((item, index) => {
                        return <WebTicket4 key={index} from={false} airline={selectedAirline} />
                    })
                    :
                    ""
            }

            {
                (moreCount.length > 0) ?
                    moreCount.map((item, index) => {
                        return <WebTicket4 from={false} airline={selectedAirline} key={index} />
                    })
                    :
                    ""
            }
            {
                (moreCount.length > 0) ?
                    moreCount.map((item, index) => {
                        return <WebTicket3 from={true} airline={selectedAirline} key={index} />
                    })
                    :
                    ""
            }
        </div>
    )
}

export default Tickets