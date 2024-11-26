import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleColor1: false,
            toggleColor2: false,
        };
    }

    componentDidMount() {
        const n = 7;
        const targetIndex = (n % 10) + 1;

        const elements = document.querySelectorAll("p, h2, h3, ul li, ol li");

        if (elements[targetIndex - 1]) {
            elements[targetIndex - 1].id = "targetElement";
        }

        if (elements[targetIndex]) {
            elements[targetIndex].classList.add("nextElement");
        }

        const targetElement = document.getElementById("targetElement");
        const nextElement = document.querySelector(".nextElement");

        if (targetElement) {
            targetElement.addEventListener("click", this.handleToggleColor1);
        }

        if (nextElement) {
            nextElement.addEventListener("click", this.handleToggleColor2);
        }

        this.cleanup = () => {
            if (targetElement) {
                targetElement.removeEventListener("click", this.handleToggleColor1);
            }
            if (nextElement) {
                nextElement.removeEventListener("click", this.handleToggleColor2);
            }
        };
    }

    componentWillUnmount() {
        this.cleanup();
    }

    handleToggleColor1 = () => {
        this.setState((prevState) => ({
            toggleColor1: !prevState.toggleColor1,
        }));
        const targetElement = document.getElementById("targetElement");
        if (targetElement) {
            targetElement.classList.toggle("toggle-color-1", !this.state.toggleColor1);
            targetElement.classList.toggle("toggle-color-2", this.state.toggleColor1);
        }
    };

    handleToggleColor2 = () => {
        this.setState((prevState) => ({
            toggleColor2: !prevState.toggleColor2,
        }));
        const nextElement = document.querySelector(".nextElement");
        if (nextElement) {
            nextElement.classList.toggle("toggle-color-1", !this.state.toggleColor2);
            nextElement.classList.toggle("toggle-color-2", this.state.toggleColor2);
        }
    };

    render() {
        return (
            <main>
                <section>
                    <p>Освіта: Закінчив школу №173, зараз навчаюсь в КПІ ім. Сікорського</p>
                </section>

                <section>
                    <h3>Мої хобі:</h3>
                    <ul>
                        <li>Читання книг</li>
                        <li>Спорт зал</li>
                        <li>Програмування</li>
                    </ul>
                </section>

                <section>
                    <h3>Мої улюблені фільми:</h3>
                    <ol>
                        <li>Guy Ritchie's The Covenant, 2023</li>
                        <li>Shutter Island, 2009</li>
                        <li>The Truman Show, 1998</li>
                    </ol>
                </section>

                <section>
                    <h3>Улюблене місто:</h3>
                    <p id="favorite-city">
                        Моє улюблене місто - Львів. Це чарівне місто з багатою історією та
                        неповторною архітектурою. Вузькі вулички, величні собори та затишні
                        кав'ярні роблять його незабутнім місцем для відвідування.
                    </p>
                    <p>
                        Більше про місто можна дізнатися{" "}
                        <a href="https://lviv.travel/">тут</a>.
                    </p>
                </section>
            </main>
        );
    }
}


export default Content;