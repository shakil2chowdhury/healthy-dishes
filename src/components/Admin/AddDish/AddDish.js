import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDish } from '../../../store/dishSlice';
import Sidebar from '../Sidebar/Sidebar';

const AddDish = () => {
    //initialize dispatch
    const dispatch = useDispatch()

    //redux state calling
    const loginUser = useSelector((state) => state.loginUser)
    const loginList = loginUser.map(loginUser => loginUser);

    //react form and image, added dish state
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState('https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg')
    const [added, setAdded] = useState(false)
    const [calori, setCalori] = useState()


    //image upload handler
    const handleImageUpload = (e) => {
        const imageData = new FormData()
        imageData.set('key', 'a59c77f7cce19a6af12a528420d40cb6')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageUrl(res.data.data.display_url))
            .catch(error => console.log(error))
    }

    //Adding dish function
    const onSubmit = data => {
        setCalori((data.dishProtein * 4) + (data.dishFat * 9) + (data.dishCarb * 4))
        data.img = imageUrl;
        dispatch(
            addDish({
                id: Date.now(),
                title: data.dishName,
                protein: data.dishProtein,
                fat: data.dishFat,
                carb: data.dishCar,
                calories: (data.dishProtein * 4) + (data.dishFat * 9) + (data.dishCarb * 4),
                img: data.img,
            }),
        setAdded(true)
        )
    };
    return (
        <>
            {loginList[1]?.user === "admin" ? <section className="container-fluid">
                <div className="row admin-container">
                    <div className="col-md-2 py-5 sidebar-admin">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <h1 className="text-center my-3">Add Dishes From Here</h1>
                            {added && <span className="text-success text-center">Your Dish Has Been Added Successfully</span>}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row d-flex">
                                    <div class="form-group col-md-5 ml-5">
                                        <label for="dishName">Dish Name</label>
                                        <input class="form-control mb-2" id="dishName" placeholder="Dish Name" {...register("dishName")} />
                                        <label for="dishCar">Carbohydrate</label>
                                        <input class="form-control mb-2" id="dishCar" placeholder="Carb" {...register("dishCar")} />
                                        <label for="dishProtein">Protein Quantity</label>
                                        <input class="form-control mb-2" id="dishProtein" placeholder="Protein Quantity" {...register("dishProtein")} />
                                    </div>
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <div className="form-group col-md-6 mx-2">
                                        <label for="serviceImage">Dish Image</label>
                                        <input name="dishImage" type="file" onChange={handleImageUpload} className="form-control mb-2" />
                                        {errors.bookCover && <span className="d-block text-danger">* Image is required</span>}
                                        <label for="dishFat">Fat Quantity</label>
                                        <input class="form-control mb-2" id="dishFat" placeholder="Fat Quantity" {...register("dishFat")} />
                                        <label for="dishCarb">Calories</label>
                                        <input class="form-control mb-2" id="dishCarb" placeholder={calori} {...register("dishCarb")} />
                                    </div>
                                    <input class="form-control my-2 btn btn-secondary" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            :
            <section className="container-fluid not-container">
                <div className="text-center align-items-center not-found">
                    <h2>404 not found!</h2>
                    <p><Link to="/login">Click Here For Login!!</Link></p>
                </div>
            </section>
        }
        </>
    )
};

export default AddDish;