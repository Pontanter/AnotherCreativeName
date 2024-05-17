const newEle = (typ,par,props,html) => {
    par = par || document.body;
    let ele = document.createElement(typ);
    par.appendChild(ele);
    for (let prop in props) {
        ele[prop] = props[prop];
    }
    if (html != null)
        ele.innerHTML = html;
}

newEle('h1', html='"Hello, world!"')