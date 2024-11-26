import React, { useState } from "react";

function Image() {
    const [imageSize, setImageSize] = useState({ width: 500, height: 350 });
    const [imageVisible, setImageVisible] = useState(true);

    const increaseImage = () => {
        setImageSize({
            width: imageSize.width * 1.2,
            height: imageSize.height * 1.2,
        });
    };

    const decreaseImage = () => {
        setImageSize({
            width: imageSize.width * 0.8,
            height: imageSize.height * 0.8,
        });
    };

    const removeImage = () => {
        setImageVisible(false);
    };

    const addImage = () => {
        setImageVisible(true);
    };

    return (
        <div>
            <div>
                <button onClick={removeImage}>Видалити зображення</button>
                <button onClick={increaseImage}>Збільшити зображення</button>
                <button onClick={decreaseImage}>Зменшити зображення</button>
                <button onClick={addImage}>Додати зображення</button>
            </div>
            {imageVisible && (
                <img
                    src="./Lviv-market-square.jpg"
                    alt="Фото Львова"
                    width={imageSize.width}
                    height={imageSize.height}
                    id="city-image"
                />
            )}
        </div>
    );
}

export default Image;