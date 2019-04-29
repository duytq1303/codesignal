function sortByHeight(a) {
    const c = [];
    const b = [];
    a.forEach((el,i) => {
        if (el === -1) {
            b.push(i);
        } else {
            c.push(el);
        } 
    });
    const k = c.sort((a,b) => a-b);
    b.forEach(el => {
        k.splice(el,0, -1);
    })
    return k;
}
