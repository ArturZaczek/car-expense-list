import { nanoid } from 'nanoid';

import { ref, set } from "firebase/database"

import { database } from '../FIrebaseUtility/Firebase';

import "./ContentForm.scss"

import { useState } from 'react';
import { useContext } from 'react';
import { StoreContex } from '../../store/StoreProvider';

const ContentForm = () => {

    const { user, infoShow, setInfoShow } = useContext(StoreContex)

    const [price, setPrice] = useState<number>(Number(''));
    const [productName, setProductName] = useState<string>('');
    const [buyDate, setBuyDate] = useState<string>('');
    const [carBrand, setCarBrand] = useState<string>('');

    const id = nanoid() //randomize id 

    const sendData = (price: number, productName: string, buyDate: string, carBrand: string) => { //send data to database 

        set(ref(database, `/${user?.uid}/${id}`), {
            id,
            price: Number(price),
            productName: productName,
            date: buyDate,
            carBrand,
            createDate: new Date().toUTCString()
        });
    }


    //add price do the state
    const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event?.target.value))
    }

    //add name  do the state
    const handleProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(String(event?.target.value))
    }

    //add date do the state
    const handleBuyDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuyDate(String(event?.target.value))
    }

    //add car model do the state
    const handleCarModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCarBrand(String(event.target.value))
    }

    //reset all input 
    const resetFormValues = () => {
        setPrice(Number(''));
        setProductName('');
        setBuyDate('')
        setCarBrand('')
    }

    //submit form 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        (Boolean(user) === true ? sendData(price, productName, buyDate, carBrand) : setInfoShow(true))
        resetFormValues()
    }

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        resetFormValues()
        console.log('reset')
    }

    return (
        <section className='divForm'>
            {infoShow === true ? <p className='infoShowText'>You must sign in to add your expenses!</p> : null}
            <form className='form' method='post' onSubmit={handleSubmit}>
                <label className='label label1'>
                    Price:
                    {/* Cena: */}
                    <input onChange={handlePrice} type="number" value={price === 0 ? "" : price} /*placeholder="cena za rzeczy... np: 50 zł"*/ placeholder="Price for item... E.g. $50" required />
                </label>
                <label className='label label2'>
                    Item:
                    {/* Rzecz: */}
                    <input onChange={handleProductName} type="text" value={productName} /*placeholder="Zakupy... np: Paliwo"*/ placeholder='Purchased item... E.g. Fuel' required />
                </label>
                <label className='label label3'>
                    Date:
                    <input onChange={handleBuyDate} type="date" value={buyDate} lang="en" required />
                </label>
                <label className='label label4' >
                    Car Brand:
                    <select onChange={handleCarModel} name="auto" id="auto" value={carBrand} required={carBrand === 'none' ? true : false}>
                        <option value='none'  > - Choose -</option>
                        <option value="ford">Ford</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="volkswagen">Volkswagen</option>
                    </select>
                </label>
                <button type='submit' className='submitBtn' >Save</button>
                {/* <button type='submit' className='submitBtn' >Zapisz</button> */}
                <button onClick={handleReset} className='btn' type='button'>Cancel</button>
                {/* <button onClick={handleReset} className='btn' type='button'>Anuluj</button> */}
            </form>

        </section>

    )
}

export default ContentForm