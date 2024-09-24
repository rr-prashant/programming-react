import { useState } from 'react'
import { InputBox } from './components'
import getCurrency from './hooks/useCurrencyinfo'

function App() {
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const [currency, setCurrency] = useState('usd')
    const [nextCurrency, setNextcurrency] =useState('npr')

    const infoCurrency = getCurrency(currency)
    
    const currencyOptions = Object.keys(infoCurrency)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setCurrency(nextCurrency)
        setNextcurrency(currency)
    }
    
    

    const convert = () => {
        setTo(from * infoCurrency[nextCurrency])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor: 'gray',
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {from}
                                setAmount={(amt) => setFrom(amt) }
                                selectedCurrency={currency}
                                Onchangecurrency={(curr) => setCurrency(curr)}
                                countryDetails={currencyOptions}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {to}
                                selectedCurrency={nextCurrency}
                                Onchangecurrency={(curr) => setNextcurrency(curr)}
                                countryDetails={currencyOptions}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
