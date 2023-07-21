import ItemList from "./ItemList"
export const RestaurantCategory = (props) => {
    // console.log(props.data)
    return(
        <div className=" my-4 bg-gray-300 shadow-xl w-6/12 m-auto p-3 ">
            <div className="flex justify-between">
           <span className=" font-bold">{props.data.title}({props.data.itemCards.length})</span>
           <span className=" font-bold">  ⌄</span>
           </div>
           <ItemList items={props.data.itemCards}/>
        </div>
    )
} 