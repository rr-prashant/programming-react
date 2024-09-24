function InputBox({
    label,
    amount,
    setAmount,
    selectedCurrency,
    Onchangecurrency,
    inputDisabled = false,
    currencyDisabled = false,
    countryDetails = []
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => {
                        let num = Number(e.target.value)
                        if (num < 0){
                            return num
                        }
                        else{
                            return setAmount && setAmount(num)
                        }
                    }}
                    disabled = {inputDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => {
                       Onchangecurrency && Onchangecurrency(e.target.value)
                    }}
                    disabled = {currencyDisabled}
                >
                    
                    {countryDetails.map((dtls) => 
                        (<option key={dtls} value={dtls}>
                            {dtls}
                        </option>)
                    )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;