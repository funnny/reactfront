import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
    const payType = [
        {name: '카드', value: '01', type: 'card'},
        {name: '현금', value: '01', type: 'cash'},
    ]
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

    const dateChange = () => {
        console.log('datechange')
    }

    return (
        <div>
            <DatePicker onChange={dateChange}></DatePicker>
            {/*<select>*/}
            {/*    {payType.map((item, index) => (*/}
            {/*        <option value={item.value}>{item.name}</option>*/}
            {/*    ))}*/}
            {/*</select>*/}
            {
                payType.map((item, index) => (
                    <input
                    type='radio'
                    id={item.type}
                    value={item.value}
                    />
                ))
            }

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



