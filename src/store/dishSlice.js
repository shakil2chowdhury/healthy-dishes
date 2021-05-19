import { createSlice } from '@reduxjs/toolkit'


const dishSlice = createSlice({
    name: "dishes",
    initialState: [
        { id: 1, title: "Ice Cream", protein: 4.6, fat: 15, carb: 31, calories: 277.4, img: 'https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg' },
        { id: 2, title: "Medium Meatball", protein: 4, fat: 6.3, carb: 2.3, calories: 345, img: 'https://www.flavcity.com/wp-content/uploads/2018/06/meatballs-tomato-sauce-500x500.jpg' },
        { id: 3, title: "Milk Shake", protein: 14, fat: 12, carb: 96, calories: 237, img: 'https://image.freepik.com/free-photo/milkshake-set-table_140725-9239.jpg' }
    ],
    reducers: {
        addDish: (state, action) => {
            const newDish = {
                id: Math.random(),
                title: action.payload.title,
                protein: action.payload.protein,
                fat: action.payload.fat,
                carb: action.payload.carb,
                img: action.payload.img,
                calories: ((action.payload.protein * 4) + (action.payload.fat * 9) + (action.payload.carb * 4)),
            }
            state.push(newDish)
        },
        deleteDish: (state, action) => {
            return(state.filter(dish => dish.id !== action.payload.id))
        },
        updateDish: (state, action) => {
            state.map(dish => {
                if (dish.id === action.payload.id) {
                    dish.title = action.payload.title
                    dish.protein = action.payload.protein
                    dish.fat = action.payload.fat
                    dish.carb = action.payload.carb
                    dish.calories = ((action.payload.protein * 4) + (action.payload.fat * 9) + (action.payload.carb * 4))
                } else {

                }
            })
        }
    },
})

export const { addDish, deleteDish, updateDish, dishList } = dishSlice.actions;
export const dishReducer = dishSlice.reducer;