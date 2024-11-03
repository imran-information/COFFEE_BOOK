import { toast } from "react-toastify"

const getCoffeeItems = () => {
    const items = localStorage.getItem('items')
    if (items) {
        const itemsData = JSON.parse(items)
        return itemsData
    } else {
        return []
    }
}
const notify = () => {
    toast.error("Already Exist !", {
        position: "top-center"
    });

}
const setCoffeeData = (coffee) => {
    const coffeeData = getCoffeeItems()
    const exist = coffeeData.find(cof => cof.id == coffee.id)
    if (exist) {
        return notify()
    }
    coffeeData.push(coffee)
    localStorage.setItem('items', JSON.stringify(coffeeData))
}

export { setCoffeeData, getCoffeeItems }