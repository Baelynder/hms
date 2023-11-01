import { createContext,useEffect, useState } from "react";
const DataContext = createContext({})
export const DataProvider=({children})=>{

    //hosetl information
    const [hostel, setHostel] = useState({
        hostelname: 'Douglas Villa',
        location: 'kikoni',
        ratings: 4,
        image0: "https://images.pexels.com/photos/3722746/pexels-photo-3722746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr="
        ,image1: "https://images.pexels.com/photos/4168047/pexels-photo-4168047.jpeg?auto=compress&cs=tinysrgb&w=600"
    })

    //manager information
    const [manager, setManager] = useState({
        name: "Ofwono Daniel",
        image: "https://img.freepik.com/free-photo/closeup-portrait-young-african-american-man-with-hat_273609-5225.jpg?w=740&t=st=1698762330~exp=1698762930~hmac=4ffae7a0a676a1185f1f77c3999aa36ce5dac78902b5d805cebbb5833731745a",
        contact: "+256646456474",
        email: "dante@gmail.com"
    })


    //rooms information
    const [rooms, setRooms] = useState([
        {
            roomNo : "RM 567",
            occupants: 2,
            capacity: 2,
            image0: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/336646740.jpg?k=0e3fcd7b4e319e696d1b715523e7865417ef4fe408ff7d9b90f3595c0ea26142&o="
        },
        {
            roomNo : "RM 7",
            occupants: 0,
            capacity: 1,
            image0: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/149648475.jpg?k=115dbc8544466a2a7128cc2c3d8bd0be7dd1fd2c6dda9c922d27419b30d14d2a&o="
        },
        {
            roomNo : "RM 1067",
            occupants: 4,
            capacity: 2,
            image0: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/149648460.jpg?k=e0a3517077c0cb191d3242063293dc1d6c739ad21b35d314e6156eea1c994855&o="
        },
        {
            roomNo : "RM 767",
            occupants: 2,
            capacity: 1,
            image0: "https://pix8.agoda.net/property/26161918/0/9fb774f994fa41c0408651d51fae6367.jpg?ca=26&ce=0&s=450x450"
        },
        {
            roomNo : "RM 58867",
            occupants: 4,
            capacity: 1,
            image0: "https://pix8.agoda.net/property/26161918/0/624bb67e791391ed8f7f311433e16121.jpg?ce=0&s=512x384"
        },
        {
            roomNo : "RM 587",
            occupants: 3,
            capacity: 2,
            image0: "https://pix8.agoda.net/property/26161918/0/b3cc19dcd55b6d0d1691b0c6ad70e926.jpg?ce=0&s=512x384"
        }
    ])
    return(
        <DataContext.Provider value={{hostel, manager, rooms}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext