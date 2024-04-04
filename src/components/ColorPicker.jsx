import React, { useState } from "react";


const ColorPicker = () => {
    const [color, setColor] = useState("#000000")
    const handleChangeColor = (e) => {
        setColor(e.target.value)
    };
    const handleSumbitSaveColor = (e) => {
        e.preventDefault();
        alert(color);
    }
    return <form onSubmit={handleSumbitSaveColor}>
            <input type="color" className="form-control" 
            style={{
                width: "100%", 
                height: "300px"
            }}
            title="Selecione el color..."
            value={ color }
            onChange={handleChangeColor}
            />
            <div className="text-center">
                <h2 className="mt-3 fw-bolder">
                    <div style={{
                        width: "20px",
                        height: "20px", 
                        background: "#128578", 
                        display: "inline-block", 
                        margin: "0 1rem",
                        borderRadius: "100%"
                    }}></div>
                    {color}
                </h2>
                <button type="sumbit"
                    className="btn btn-success">
                    Guardar Color
                </button>
            </div>
        </form>
};

export default ColorPicker;