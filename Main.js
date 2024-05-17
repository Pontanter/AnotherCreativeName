/*
    some context:
        this is pretty much just some utilities you can use for js
        print,newEle,modifyStyle,clamp,GetMaxRGBbit
    
    enjoy, or don't, I don't care all that much lol
*/
const print = console.log;
const newEle = (typ,par,props) => {
    par = par || document.body;
    let ele = document.createElement(typ);
    par.appendChild(ele);
    for (let prop in props) {
        ele[prop] = props[prop];
    }
    return ele;
}
const modifyStyle = (ele, style) => {
    for (let prop in style) {
        ele.style[prop] = style[prop];
    }
}
const clamp = (val,min,max) => {
    if (val > max) return max;
    if (val < min) return min;
    return val;
}
const GetMaxRGBbit = (percentage) => {
    return 255*(clamp(percentage,.0001,100)/100);
}
let ele1 = newEle('h1', document.body, {innerText:'sample text content epic'});
let sine = 0;
modifyStyle(document.body, {
    backgroundColor: `rgb(255,${GetMaxRGBbit(50)},0)`,
    color: `rgb(${GetMaxRGBbit(50)},${GetMaxRGBbit(25)},0)`
})
setInterval(() => {
    sine++;
    modifyStyle(ele1, {
        left: 35+Math.sin(sine/175)*25 + '%',
        top: 50+Math.sin((sine/175)-1.75)*25 + '%',
        transform: `rotate(${Math.sin((sine/175)-1.5)*45}deg)`,
        position: 'absolute',
        fontFamily: 'monospace',
        userSelect: 'none'
    });
}, 1);