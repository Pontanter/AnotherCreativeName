const print = console.log;
const newEle = (typ,par,props) => {
    par = par || document.body;
    let ele = document.createElement(typ);
    par.appendChild(ele);
    for (let prop in props) {
        ele[prop] = props[prop];
    }
}

newEle('h1', document.body, {innerText:'Hello, world!'});