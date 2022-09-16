import DatePicker from "react-datepicker"
import {useState} from "react"

export default function Home() {
    const [typeValue, setTypeValue] = useState('01')
    const typeOnChanged = (e) => {
        console.log(e.target.value)
    }
    const payType = [
        {name: '카드', value: '01', type: 'card'},
        {name: '현금', value: '02', type: 'cash'},
    ]

    let renderPayType = payType.map(item => {
        return (
            <input
                key={item.type}
                type='radio'
                id='typeRadio'
                value={item.value}

                onChange={typeOnChanged}
            />
        )
    })

    const dateChange = () => {
        console.log('datechange')
    }
    console.log(payType)
    return (
        <div>
            <DatePicker onChange={dateChange} ></DatePicker>

            {renderPayType}

        </div>
    )

}

// export async function getServerSideProps() {
// const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
// ).json();
// return {

    //     props: {
    //         results,
    //     },
    // };

    // const { results } = [
    //     {name: "삼성카드", value: "01"},
    //     {name: "현대카드", value: "02"}
    // ]
    //
    // return {
    //     props: {
    //         results,
    //     },
    // }
// }

// const cardList = [
//     {name: "삼성카드", value: "01"},
//     {name: "현대카드", value: "02"},
//     {name: "하나카드", value: "03"},
//     {name: "현대카드", value: "04"},
//     {name: "현대카드", value: "05"},
//     {name: "현대카드", value: "06"},
//     {name: "현대카드", value: "07"},
//     {name: "현대카드", value: "08"},
//     {name: "현대카드", value: "09"},
// ]

