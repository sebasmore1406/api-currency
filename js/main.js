const currencies = [
    {
        "Code": "AED",
        "Currency": "UAE Dirham"
    },
    {
        "Code": "AFN",
        "Currency": "Afghani"
    },
    {
        "Code": "ALL",
        "Currency": "Lek"
    },
    {
        "Code": "AMD",
        "Currency": "Armenian Dram"
    },
    {
        "Code": "ANG",
        "Currency": "Netherlands Antillean Guilder"
    },
    {
        "Code": "AOA",
        "Currency": "Kwanza"
    },
    {
        "Code": "ARS",
        "Currency": "Argentine Peso"
    },
    {
        "Code": "AUD",
        "Currency": "Australian Dollar"
    },
    {
        "Code": "AWG",
        "Currency": "Aruban Florin"
    },
    {
        "Code": "AZN",
        "Currency": "Azerbaijan Manat"
    },
    {
        "Code": "BAM",
        "Currency": "Convertible Mark"
    },
    {
        "Code": "BBD",
        "Currency": "Barbados Dollar"
    },
    {
        "Code": "BDT",
        "Currency": "Taka"
    },
    {
        "Code": "BGN",
        "Currency": "Bulgarian Lev"
    },
    {
        "Code": "BHD",
        "Currency": "Bahraini Dinar"
    },
    {
        "Code": "BIF",
        "Currency": "Burundi Franc"
    },
    {
        "Code": "BMD",
        "Currency": "Bermudian Dollar"
    },
    {
        "Code": "BND",
        "Currency": "Brunei Dollar"
    },
    {
        "Code": "BOB",
        "Currency": "Boliviano"
    },
    {
        "Code": "BOV",
        "Currency": "Mvdol"
    },
    {
        "Code": "BRL",
        "Currency": "Brazilian Real"
    },
    {
        "Code": "BSD",
        "Currency": "Bahamian Dollar"
    },
    {
        "Code": "BTN",
        "Currency": "Ngultrum"
    },
    {
        "Code": "BWP",
        "Currency": "Pula"
    },
    {
        "Code": "BYN",
        "Currency": "Belarusian Ruble"
    },
    {
        "Code": "BZD",
        "Currency": "Belize Dollar"
    },
    {
        "Code": "CAD",
        "Currency": "Canadian Dollar"
    },
    {
        "Code": "CDF",
        "Currency": "Congolese Franc"
    },
    {
        "Code": "CHE",
        "Currency": "WIR Euro"
    },
    {
        "Code": "CHF",
        "Currency": "Swiss Franc"
    },
    {
        "Code": "CHW",
        "Currency": "WIR Franc"
    },
    {
        "Code": "CLF",
        "Currency": "Unidad de Fomento"
    },
    {
        "Code": "CLP",
        "Currency": "Chilean Peso"
    },
    {
        "Code": "CNH",
        "Currency": "Yuan Renminbi (International)"
    },
    {
        "Code": "CNY",
        "Currency": "Yuan Renminbi (Domestic)"
    },
    {
        "Code": "COP",
        "Currency": "Colombian Peso"
    },
    {
        "Code": "COU",
        "Currency": "Unidad de Valor Real"
    },
    {
        "Code": "CRC",
        "Currency": "Costa Rican Colon"
    },
    {
        "Code": "CUC",
        "Currency": "Peso Convertible"
    },
    {
        "Code": "CUP",
        "Currency": "Cuban Peso"
    },
    {
        "Code": "CVE",
        "Currency": "Cabo Verde Escudo"
    },
    {
        "Code": "CZK",
        "Currency": "Czech Koruna"
    },
    {
        "Code": "DJF",
        "Currency": "Djibouti Franc"
    },
    {
        "Code": "DKK",
        "Currency": "Danish Krone"
    },
    {
        "Code": "DOP",
        "Currency": "Dominican Peso"
    },
    {
        "Code": "DZD",
        "Currency": "Algerian Dinar"
    },
    {
        "Code": "EGP",
        "Currency": "Egyptian Pound"
    },
    {
        "Code": "ERN",
        "Currency": "Nakfa"
    },
    {
        "Code": "ETB",
        "Currency": "Ethiopian Birr"
    },
    {
        "Code": "EUR",
        "Currency": "Euro"
    },
    {
        "Code": "FJD",
        "Currency": "Fiji Dollar"
    },
    {
        "Code": "FKP",
        "Currency": "Falkland Islands Pound"
    },
    {
        "Code": "GBP",
        "Currency": "Pound Sterling"
    },
    {
        "Code": "GEL",
        "Currency": "Lari"
    },
    {
        "Code": "GHS",
        "Currency": "Ghana Cedi"
    },
    {
        "Code": "GIP",
        "Currency": "Gibraltar Pound"
    },
    {
        "Code": "GMD",
        "Currency": "Dalasi"
    },
    {
        "Code": "GNF",
        "Currency": "Guinean Franc"
    },
    {
        "Code": "GTQ",
        "Currency": "Quetzal"
    },
    {
        "Code": "GYD",
        "Currency": "Guyana Dollar"
    },
    {
        "Code": "HKD",
        "Currency": "Hong Kong Dollar"
    },
    {
        "Code": "HNL",
        "Currency": "Lempira"
    },
    {
        "Code": "HTG",
        "Currency": "Gourde"
    },
    {
        "Code": "HUF",
        "Currency": "Forint"
    },
    {
        "Code": "IDR",
        "Currency": "Rupiah"
    },
    {
        "Code": "ILS",
        "Currency": "New Israeli Sheqel"
    },
    {
        "Code": "INR",
        "Currency": "Indian Rupee"
    },
    {
        "Code": "IQD",
        "Currency": "Iraqi Dinar"
    },
    {
        "Code": "IRR",
        "Currency": "Iranian Rial"
    },
    {
        "Code": "ISK",
        "Currency": "Iceland Krona"
    },
    {
        "Code": "JMD",
        "Currency": "Jamaican Dollar"
    },
    {
        "Code": "JOD",
        "Currency": "Jordanian Dinar"
    },
    {
        "Code": "JPY",
        "Currency": "Yen"
    },
    {
        "Code": "KES",
        "Currency": "Kenyan Shilling"
    },
    {
        "Code": "KGS",
        "Currency": "Som"
    },
    {
        "Code": "KHR",
        "Currency": "Riel"
    },
    {
        "Code": "KMF",
        "Currency": "Comorian Franc "
    },
    {
        "Code": "KPW",
        "Currency": "North Korean Won"
    },
    {
        "Code": "KRW",
        "Currency": "Won"
    },
    {
        "Code": "KWD",
        "Currency": "Kuwaiti Dinar"
    },
    {
        "Code": "KYD",
        "Currency": "Cayman Islands Dollar"
    },
    {
        "Code": "KZT",
        "Currency": "Tenge"
    },
    {
        "Code": "LAK",
        "Currency": "Lao Kip"
    },
    {
        "Code": "LBP",
        "Currency": "Lebanese Pound"
    },
    {
        "Code": "LKR",
        "Currency": "Sri Lanka Rupee"
    },
    {
        "Code": "LRD",
        "Currency": "Liberian Dollar"
    },
    {
        "Code": "LSL",
        "Currency": "Loti"
    },
    {
        "Code": "LYD",
        "Currency": "Libyan Dinar"
    },
    {
        "Code": "MAD",
        "Currency": "Moroccan Dirham"
    },
    {
        "Code": "MDL",
        "Currency": "Moldovan Leu"
    },
    {
        "Code": "MGA",
        "Currency": "Malagasy Ariary"
    },
    {
        "Code": "MKD",
        "Currency": "Denar"
    },
    {
        "Code": "MMK",
        "Currency": "Kyat"
    },
    {
        "Code": "MNT",
        "Currency": "Tugrik"
    },
    {
        "Code": "MOP",
        "Currency": "Pataca"
    },
    {
        "Code": "MRU",
        "Currency": "Ouguiya"
    },
    {
        "Code": "MUR",
        "Currency": "Mauritius Rupee"
    },
    {
        "Code": "MVR",
        "Currency": "Rufiyaa"
    },
    {
        "Code": "MWK",
        "Currency": "Malawi Kwacha"
    },
    {
        "Code": "MXN",
        "Currency": "Mexican Peso"
    },
    {
        "Code": "MXV",
        "Currency": "Mexican Unidad de Inversion (UDI)"
    },
    {
        "Code": "MYR",
        "Currency": "Malaysian Ringgit"
    },
    {
        "Code": "MZN",
        "Currency": "Mozambique Metical"
    },
    {
        "Code": "NAD",
        "Currency": "Namibia Dollar"
    },
    {
        "Code": "NGN",
        "Currency": "Naira"
    },
    {
        "Code": "NIO",
        "Currency": "Cordoba Oro"
    },
    {
        "Code": "NOK",
        "Currency": "Norwegian Krone"
    },
    {
        "Code": "NPR",
        "Currency": "Nepalese Rupee"
    },
    {
        "Code": "NZD",
        "Currency": "New Zealand Dollar"
    },
    {
        "Code": "OMR",
        "Currency": "Rial Omani"
    },
    {
        "Code": "PAB",
        "Currency": "Balboa"
    },
    {
        "Code": "PEN",
        "Currency": "Sol"
    },
    {
        "Code": "PGK",
        "Currency": "Kina"
    },
    {
        "Code": "PHP",
        "Currency": "Philippine Peso"
    },
    {
        "Code": "PKR",
        "Currency": "Pakistan Rupee"
    },
    {
        "Code": "PLN",
        "Currency": "Zloty"
    },
    {
        "Code": "PYG",
        "Currency": "Guarani"
    },
    {
        "Code": "QAR",
        "Currency": "Qatari Rial"
    },
    {
        "Code": "RON",
        "Currency": "Romanian Leu"
    },
    {
        "Code": "RSD",
        "Currency": "Serbian Dinar"
    },
    {
        "Code": "RUB",
        "Currency": "Russian Ruble"
    },
    {
        "Code": "RWF",
        "Currency": "Rwanda Franc"
    },
    {
        "Code": "SAR",
        "Currency": "Saudi Riyal"
    },
    {
        "Code": "SBD",
        "Currency": "Solomon Islands Dollar"
    },
    {
        "Code": "SCR",
        "Currency": "Seychelles Rupee"
    },
    {
        "Code": "SDG",
        "Currency": "Sudanese Pound"
    },
    {
        "Code": "SEK",
        "Currency": "Swedish Krona"
    },
    {
        "Code": "SGD",
        "Currency": "Singapore Dollar"
    },
    {
        "Code": "SHP",
        "Currency": "Saint Helena Pound"
    },
    {
        "Code": "SLE",
        "Currency": "Leone"
    },
    {
        "Code": "SLL",
        "Currency": "Leone"
    },
    {
        "Code": "SOS",
        "Currency": "Somali Shilling"
    },
    {
        "Code": "SRD",
        "Currency": "Surinam Dollar"
    },
    {
        "Code": "SSP",
        "Currency": "South Sudanese Pound"
    },
    {
        "Code": "STN",
        "Currency": "Dobra"
    },
    {
        "Code": "SVC",
        "Currency": "El Salvador Colon"
    },
    {
        "Code": "SYP",
        "Currency": "Syrian Pound"
    },
    {
        "Code": "SZL",
        "Currency": "Lilangeni"
    },
    {
        "Code": "THB",
        "Currency": "Baht"
    },
    {
        "Code": "TJS",
        "Currency": "Somoni"
    },
    {
        "Code": "TMT",
        "Currency": "Turkmenistan New Manat"
    },
    {
        "Code": "TND",
        "Currency": "Tunisian Dinar"
    },
    {
        "Code": "TOP",
        "Currency": `Pa'anga`
    },
    {
        "Code": "TRY",
        "Currency": "Turkish Lira"
    },
    {
        "Code": "TTD",
        "Currency": "Trinidad and Tobago Dollar"
    },
    {
        "Code": "TWD",
        "Currency": "New Taiwan Dollar"
    },
    {
        "Code": "TZS",
        "Currency": "Tanzanian Shilling"
    },
    {
        "Code": "UAH",
        "Currency": "Hryvnia"
    },
    {
        "Code": "UGX",
        "Currency": "Uganda Shilling"
    },
    {
        "Code": "USD",
        "Currency": "US Dollar"
    },
    {
        "Code": "USN",
        "Currency": "US Dollar (Next day)"
    },
    {
        "Code": "UYI",
        "Currency": "Uruguay Peso en Unidades Indexadas (UI)"
    },
    {
        "Code": "UYU",
        "Currency": "Peso Uruguayo"
    },
    {
        "Code": "UYW",
        "Currency": "Unidad Previsional"
    },
    {
        "Code": "UZS",
        "Currency": "Uzbekistan Sum"
    },
    {
        "Code": "VED",
        "Currency": "Bolívar Soberano"
    },
    {
        "Code": "VES",
        "Currency": "Bolívar Soberano"
    },
    {
        "Code": "VND",
        "Currency": "Dong"
    },
    {
        "Code": "VUV",
        "Currency": "Vatu"
    },
    {
        "Code": "WST",
        "Currency": "Tala"
    },
    {
        "Code": "XAF",
        "Currency": "CFA Franc BEAC"
    },
    {
        "Code": "XAG",
        "Currency": "Silver"
    },
    {
        "Code": "XAU",
        "Currency": "Gold"
    },
    {
        "Code": "XBA",
        "Currency": "Bond Markets Unit European Composite Unit (EURCO)"
    },
    {
        "Code": "XBB",
        "Currency": "Bond Markets Unit European Monetary Unit (E.M.U.-6)"
    },
    {
        "Code": "XBC",
        "Currency": "Bond Markets Unit European Unit of Account 9 (E.U.A.-9)"
    },
    {
        "Code": "XBD",
        "Currency": "Bond Markets Unit European Unit of Account 17 (E.U.A.-17)"
    },
    {
        "Code": "XCD",
        "Currency": "East Caribbean Dollar"
    },
    {
        "Code": "XDR",
        "Currency": "SDR (Special Drawing Right)"
    },
    {
        "Code": "XOF",
        "Currency": "CFA Franc BCEAO"
    },
    {
        "Code": "XPD",
        "Currency": "Palladium"
    },
    {
        "Code": "XPF",
        "Currency": "CFP Franc"
    },
    {
        "Code": "XPT",
        "Currency": "Platinum"
    },
    {
        "Code": "XSU",
        "Currency": "Sucre"
    },
    {
        "Code": "XUA",
        "Currency": "ADB Unit of Account"
    },
    {
        "Code": "YER",
        "Currency": "Yemeni Rial"
    },
    {
        "Code": "ZAR",
        "Currency": "Rand"
    },
    {
        "Code": "ZMW",
        "Currency": "Zambian Kwacha"
    },
    {
        "Code": "ZWL",
        "Currency": "Zimbabwe Dollar"
}]

const html = {
    input: document.querySelector('#quantity'),
    currencyFrom: document.querySelector('#currency-from'),
    currencyTo: document.querySelector('#currency-to'),
    buttons: {
        switch: document.querySelector('#switch-currency'),
        convert: document.querySelector('#convert')
    },
    output: document.querySelector('#converter-output')
}
for (let index = 0; index < currencies.length; index++) {
    html.currencyFrom.innerHTML += `<option value="${currencies[index].Code}">${currencies[index].Currency} (${currencies[index].Code})</option>`
    html.currencyTo.innerHTML += `<option value="${currencies[index].Code}">${currencies[index].Currency} (${currencies[index].Code})</option>`
}
html.currencyFrom.value = 'MXN'
html.currencyTo.value = 'USD'
let previous = {
    from: 'MXN',
    to: 'USD'
}
let previousCurrencyFrom = 'MXN'
let previousCurrencyTo = 'USD'

function handleSameCurrencies(sourceSelect, targetSelect, sourceKey, targetKey, previous) {
    const newValue = sourceSelect.value;
    if (newValue === targetSelect.value) {
        targetSelect.value = previous[sourceKey];
        previous[targetKey] = targetSelect.value;
    }
    previous[sourceKey] = newValue;
};

function changeCurrencies() {
    let tempValue = html.currencyFrom.value;
    html.currencyFrom.value = html.currencyTo.value;
    previous.from = html.currencyFrom.value;
    html.currencyTo.value = tempValue;
    previous.to = html.currencyTo.value;
}

function convertCurrency() {
    html.output.innerHTML = '';
    const url = `https://api.unirateapi.com/api/convert?api_key=CecfKEtzE79SurqDgoaE1s7VNzsECjD8mrj2uhhWkErA14CbL2eNJ12IJEp0RAa6&amount=${html.input.value}&from=${html.currencyFrom.value}&to=${html.currencyTo.value}`
    fetch(url)
    .then(response => {
        return response.json()
    }).then(data => {
        html.output.innerHTML = `<p>${data.amount.toLocaleString('es-MX', {maximumFractionDigits: 2, minimumFractionDigits: 2})} ${data.from} es igual a ${data.result.toLocaleString('es-MX', {maximumFractionDigits: 2, minimumFractionDigits: 2})} ${data.to}</p>`;
    }).catch(error => {
        html.output.html = error.message
    })
}

html.currencyFrom.addEventListener("change", () =>{
    handleSameCurrencies(html.currencyFrom, html.currencyTo, 'from', 'to', previous)
})

html.currencyTo.addEventListener("change", () =>{
    handleSameCurrencies(html.currencyTo, html.currencyFrom, 'to', 'from', previous)
})

html.buttons.switch.addEventListener('click', changeCurrencies);

html.buttons.convert.addEventListener('click', convertCurrency);

html.input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        convertCurrency();
    };
});