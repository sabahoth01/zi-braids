function Discount(){
    const currentMonth = new Date().getMonth()
    const isSummer = currentMonth >= 5 && currentMonth <=9
    if(!isSummer){
        return(
            <div>
                Choose your best style!
            </div>)
    }else
        return (
            <div>
               It's Summer... Earn 10% discount on every purchase!
            </div>
        )
}

export default Discount