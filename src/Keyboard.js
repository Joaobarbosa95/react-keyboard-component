import {
    useRef,
    useState
} from "react"

import "./Keyboard.css"

const Keyboard = function () {
   const [inp, setInp] = useState("a")
    const i = useRef(null)
    
    function insert(e) {
        console.log(e)
        i.current.value += e.target.innerText 
        i.current.focus()
    }

return <>
        <input type="text" style={{width: "400px", height: "100px", fontSize: "3em"}} ref={i}/>
    <div id="keyboard-container" className="display-none" onClick={insert}>
  <div id="accent-keyboard">
        <Numeric /> 
    <div className="accent-keyboard-modifications">
            <div className="key" id="qw">qw</div>
            <div className="key" id="qw">qw</div>
        </div>
        </div>
  </div>
    </>
}

export default Keyboard

const Alphabetical = () => {

 const keys = [
       [
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"
       ], 
       [
        "a", "s", "d", "f", "g", "h", "j", "k", "l"
       ], 
       [
        "shift", "z", "x", "c", "v", "b", "n", "m", "backspace"
       ], 
       [
        "123?", "@", "space", ".", ".com"
       ]
    ]

 return  <div id="keys-layout">
        {
            keys.map(keyboardRow => {
                return <div className="keyboard-row">
                        {
                            keyboardRow.map(key => {
                                return <div key={key} className="key" id={key}>{key}</div>
                            })
                        }
                    </ div>
            })
        }
</div>;
}

const Numeric = () => {
    const keys = [
        [
         "1", "2", "3", "0", ".", ",", "-", "@"
        ],
        [
         "4", "5", "6", "/", ":", "_", "*", "#"
        ],
        [
         "7", "8", "9", "(", ")", "$", "?", "!"
        ], 
        [
         "abc", "space", "backspace"
        ]
    ]

 return  <div id="numeric-layout">
        {
            keys.map(keyboardRow => {
                console.log(keyboardRow)
                return <div className="keyboard-row">
                        {
                            keyboardRow.map(key => {
                                return <div key={key} className="key" id={key}>{key}</div>
                            })
                        }
                    </ div>
            })
        }
</div>;
}

