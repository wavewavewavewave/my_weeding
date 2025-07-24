'use client'
import React from 'react'
import './addtocalendar.css'
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export default function AddToCalendarBlock() {
    return (
        <div className='container_add_to_calendar'>
            <div className='button_add_to_calendar'>
                <AddToCalendarButton
                    name="Сваааадьба Н+П"
                    description='Сваааадьба Н+П'
                    startDate="2025-09-20"
                    options={['Apple', 'Google', 'Yahoo', 'iCal']}
                    timeZone="Europe/Moscow"
                    label="Добавить в календарь"
                      styleLight="--btn-min-width: 80px; --btn-padding: 2px 6px; --btn-background: rgb(84, 84, 84); --btn-text: #fff;"
                    // styleLight="--btn-background: rgb(84, 84, 84); --btn-text: #fff; --font: Georgia, 'Times New Roman', Times, serif;"
                    styleDark="--btn-background: #000;"
                ></AddToCalendarButton>
            </div>
        </div>
    )
}