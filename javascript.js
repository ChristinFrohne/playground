function hugo(y, z) {
    return y + z
}
let x = {
    karl: 4.4 / 235.4,
    heinz: "Guten Tag",
    Günther: {
        drei: 7
    }
};

x.karl = hugo(x.Günther.drei, 1);
if (x.karl > 2) {
    console.log("text" + "now", x);
} else {
    console.log("geht nicht:", x)
}