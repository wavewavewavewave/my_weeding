'use client'
import './confirmation.css'
import { useState } from 'react'
import { Checkbox } from '@mui/material'
import Radio from '@mui/material/Radio';

export default function ConfirmationBlock() {
    const [isSent, setIsSent] = useState(false)
    const [value, setValue] = useState('')
    const [attendance, setAttendance] = useState("");
    const [drinksChecked, setDrinksChecked] = useState({
        wine: false,
        sparkling: false,
        strongAlcohol: false,
        nonAlcoholic: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setDrinksChecked((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleAttendanceChange = (value) => {
        setAttendance(prev => (prev === value ? "" : value));
      };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xldlgkvo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: value,
                    will_be_at_the_wedding: attendance === "yes" ? "Да" : "Нет",
                    wont_be_at_the_wedding: attendance === "no" ? "Да" : "Нет",
                    drinks: drinksChecked
                }),
            });
            setIsSent(true)
            if (response.ok) {
                setValue('')
                setAttendance("")
                setDrinksChecked({
                    wine: false,
                    sparkling: false,
                    strongAlcohol: false,
                    nonAlcoholic: false,
                })
            }
            // handle response if needed
        } catch (error) {
            console.log(error);
        }
    };
    console.log(drinksChecked, 'SAD')

    return (
        <div className='container'>
            <div>
                <h1>Подтвердите свое присутствие, заполнив анкету ниже:</h1>
                <div className='info_block'>
                    <span>Ваше Имя</span>
                    <input className='input_name' type="text" placeholder='Иван Иванов' value={value} onChange={(e) => handleChange(e)} />
                    <span style={{ marginTop: '20px' }}>Планируете ли вы присутствовать?</span>
                    <div
                        className={`radio_label${attendance && attendance !== "yes" ? " radio-label-unselected" : ""}`}
                    >
                        <Radio
                            size="medium"
                            checked={attendance === "yes"}
                            onClick={() => handleAttendanceChange("yes")}
                        />
                        <span>Да, с удовольствием!</span>
                    </div>
                    <div
                        className={`radio_label${attendance && attendance !== "no" ? " radio-label-unselected" : ""}`}
                    >
                        <Radio
                            size="medium"
                            checked={attendance === "no"}
                            onClick={() => handleAttendanceChange("no")}
                        />
                        <span>К сожалению, не смогу</span>
                    </div>
                    <span style={{ marginTop: '20px' }}>Ваши предпочтения в напитках:</span>
                    <div className='input_checkbox'>
                        <Checkbox size='medium'
                            color='black'
                            name='wine'
                            checked={drinksChecked.wine}
                            onChange={handleCheckboxChange}
                        />
                        <span>Вино</span>
                    </div>
                    <div className='input_checkbox'>
                        <Checkbox size='medium' color='black'
                            name='sparkling'
                            checked={drinksChecked.sparkling}
                            onChange={handleCheckboxChange}
                        />
                        <span>Игристое</span>
                    </div>
                    <div className='input_checkbox'>
                        <Checkbox size='medium' color='black'
                            name='strongAlcohol'
                            checked={drinksChecked.strongAlcohol}
                            onChange={handleCheckboxChange}
                        />
                        <span>Крепкий алкоголь</span>
                    </div>
                    <div className='input_checkbox'>
                        <Checkbox size='medium'
                            color='black'
                            name='nonAlcoholic'
                            checked={drinksChecked.nonAlcoholic}
                            onChange={handleCheckboxChange}
                        />
                        <span>Безалкогольные напитки</span>
                    </div>
                </div>
                <div className={`flip-container${isSent ? ' flipped' : ''}`}>
                    <button
                        type="submit"
                        className="circle-button flip-front"
                        onClick={handleFormSubmit}
                        disabled={isSent}
                    >
                        ОТПРАВИТЬ!
                    </button>
                    <div className="circle-button flip-back" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        Спасибо!
                    </div>
                </div>
            </div>
        </div>
    )
}