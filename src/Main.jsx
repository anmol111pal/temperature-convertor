import React, { useState} from 'react'

const Main = () => {
    const [temp, setTemp] = useState({
        "celsius": "",
        "fahrenheit": "",
        "kelvin": ""
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (value === "" || value == undefined || value == null || value == NaN)
            value = "";

        // setTemp((prevState) => {
        //     return { ...prevState, [name]: value }
        // })

        switch (name) {
            case "celsius": {
                if (value === "") {
                    setTemp((prevState) => {
                        return {
                            "celsius": "",
                            "fahrenheit": "",
                            "kelvin": ""
                        }
                    });
                }
                else {
                    const c = Number(value);
                    const k = c + 273;
                    const f = c * (9.0 / 5) + 32;
                    setTemp((prevState) => {
                        return {
                            "celius": c,
                            "fahrenheit": f,
                            "kelvin": k
                        }
                    });
                }
                return;
            }
            case "fahrenheit": {
                if (value === "") {
                    setTemp((prevState) => {
                        return {
                            "fahrenheit": "",
                            "celsius": "",
                            "kelvin": ""
                        }
                    });
                }
                else {
                    const f = Number(value);
                    const c = (f - 32) * (5.0 / 9);
                    const k = c + 273;
                    setTemp((prevState) => {
                        return {
                            "fahrenheit": f,
                            "celsius": c,
                            "kelvin": k
                        }
                    });
                }
                return;
            }
            case "kelvin": {
                if (value === "") {
                    setTemp((prevState) => {
                        return {
                            "kelvin": "",
                            "celsius": "",
                            "fahrenheit": ""
                        }
                    });
                }
                else {
                    const k = Number(value);
                    const f = (k - 273) * (9.0 / 5) + 32;
                    const c = k - 273;
                    setTemp((prevState) => {
                        return {
                            "kelvin": k,
                            "celsius": c,
                            "fahrenheit": f
                        }
                    });
                }
                return;
            }
        }
    }



    return (
        <section className="temp">
            <input type="number" placeholder="celsius" name="celsius" value={temp.celsius} onChange={handleChange} />

            <input type="number" placeholder="Fahrenheit" name="fahrenheit" value={temp.fahrenheit} onChange={handleChange} />

            <input type="number" placeholder="Kelvin" name="kelvin" value={temp.kelvin} onChange={handleChange} />
        </section>
    )
}

export default Main