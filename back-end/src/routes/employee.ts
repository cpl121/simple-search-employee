import express from 'express';
import type { Request, Response } from 'express'
import { KEYS, DATA } from '../data';

export const employeesRouter = express.Router();

// Get all employees
employeesRouter.get('/', (req: Request, res: Response) => {
    let data = KEYS.population.person;
    for (let i = 0; i < data.length; i++) {
        data[i]["phonePrefix"] = calculatePhone(data[i]['country-id'], data[i]['phone']);
        data[i]["country"] = calculateCountry(data[i]['country-id']);
        data[i]["sexLarge"] = calculateSex(data[i]['sex']);
        data[i]["datebirthday"] = formatDateBirthday(data[i].datebirthday);
        data[i]["lastModification"] = formatDateLastMod(data[i].lastModification);
    }
    res.send(data);
});

function calculateCountry(id) {
    return DATA?.data?.country?.find(e => e.id === id)?.description ?? '';
}

function calculatePhone(id: number, phone: string) {
    let prefix = DATA?.data?.country?.find(e => e.id === id)?.prefix ?? '';
    return '+(' + prefix + ') ' + phone;
}

function calculateSex(key: string) {
    return DATA?.data?.sex?.find(e => e.key === key)?.description ?? '';
}

function formatDateBirthday(date: string) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = addZeroToNumber(newDate.getMonth() + 1);
    const day = addZeroToNumber(newDate.getDate());
    return year + "-" + month + "-" + day;
}

function formatDateLastMod(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = addZeroToNumber(newDate.getMonth() + 1);
    const day = addZeroToNumber(newDate.getDate());
    const hours = addZeroToNumber(newDate.getHours());
    const minutes = addZeroToNumber(newDate.getMinutes());

    return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
}

function addZeroToNumber(number: number) {
    let finalNumber = String(number);
    if (finalNumber.length === 1) {
        finalNumber = "0" + number
    }
    return finalNumber
}
