(function () {
  const { useState } = React;

  function App() {
    const [stage, setStage] = useState(0);
    const maxClicks = 10;

    const handleClick = () => {
      if (stage < maxClicks) {
        setStage(stage + 1);
      }
    };

    const piggySrc = stage === maxClicks
      ? "https://cdn-icons-png.flaticon.com/512/2323/2323661.png"
      : "https://raw.githubusercontent.com/alex2237/piggy-stages/main/piggy" + stage + ".png";

    return React.createElement("div", null,
      stage === 0 && React.createElement("div", null,
        React.createElement("h1", null, "Ярослав, поздравляем со свадьбой!"),
        React.createElement("p", null, "Пусть жизнь в роли мужа будет сказкой!"),
        React.createElement("button", { onClick: () => setStage(1) }, "К подарочку 🎁")
      ),
      stage > 0 && stage < maxClicks && React.createElement("div", null,
        React.createElement("p", null, "Нажимай на свинку"),
        React.createElement("img", {
          src: piggySrc,
          onClick: handleClick,
          width: 200
        })
      ),
      stage === maxClicks && React.createElement("div", null,
        React.createElement("h2", null, "Подарок готов!"),
        React.createElement("img", {
          src: "https://sbpqr.nspk.ru/QRGenerator/images/qr_example.png",
          width: 200
        })
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
})();
