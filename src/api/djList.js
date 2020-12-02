const { GoogleSpreadsheet } = require('google-spreadsheet');

const GOOGLE_SPREADSHEET_ID = "1EksYPAU2ksqEJHmq5QnjbgDKaSdmlKoDhpJUvB0eLsE";
const GOOGLE_SHEETS_API_KEY = "AIzaSyCW7EOVkKv6s_6WJMmqHX5QwxwkA6UuSuY";
const GOOGLE_SPREADSHEET_DJ_WORKSHEET_ID = 2057121297;

export const getDjData = async () => {
    const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID);
    doc.useApiKey(GOOGLE_SHEETS_API_KEY);
    await doc.loadInfo();
    const sheet = doc.sheetsById[GOOGLE_SPREADSHEET_DJ_WORKSHEET_ID];
    const rows = await sheet.getRows();
    const djs =  rows.map(row => adaptDjFromSpreadsheet(row));
    const eventDates = sheet.headerValues.filter(isDate);
    const nextEventDate = eventDates
        .sort((stringDateA, stringDateB) => new Date(stringDateA) > new Date(stringDateB))
        .filter(stringDate => new Date(stringDate) >= new Date())
        [0];

    const nextEventDjs = djs
        .filter(row => row._raw[nextEventDate])
        .map(dj => ({
            ...dj,
            nextEventTime: dj.dates[nextEventDate]
        }));

    return {
        djs,
        eventDates,
        nextEventDate,
        nextEventDjs,
    }
}

const isDate = (value) => {
    const dateReg  = /[0-9]+\s[\w]+\.?\s[0-9]+/i;
    return value.match(dateReg);
}

const adaptDjFromSpreadsheet = (spreadsheetRow) => {
    let dj = {};
    Object.keys(spreadsheetRow)
        .filter(key => !key.startsWith("_"))
        .filter(key => !isDate(key))
        .forEach(key => dj[key] = spreadsheetRow[key])
    const dates = [];
    Object.keys(spreadsheetRow)
        .filter(key => isDate(key))
        .filter(key => spreadsheetRow[key])
        .forEach(key => dates[key] = spreadsheetRow[key])
    return {
        ...dj,
        dates: dates,
        _raw: spreadsheetRow,
    }
}

const main = async () => {
    console.log(await getDjData());
}

main();