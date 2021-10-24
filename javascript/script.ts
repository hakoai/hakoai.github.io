function CreateRundomText(text: string, initTime: number, doneTime :number) {
    const now = Date.now();
    const interval = (doneTime - initTime) / text.length;

    const romdomText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?<>_+-*/;:#$%&[]{},.";

    const fixTextCount = (now > doneTime) ? text.length : (now - initTime) / interval;

    let result = text.slice(0,fixTextCount + 1)

    for(let index = fixTextCount; index < text.length; index++){
        result += romdomText[~~(Math.random() * romdomText.length)]
    }

    return result;
}


let startTime = Date.now();

function Do() {
    const str = "hakoai"
    const output = CreateRundomText(str, startTime, startTime + 1000);
    document.getElementById("hakoainame").textContent = output;
    if (str != output) {
        setTimeout(() => Do(), 0);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    Do();    
});