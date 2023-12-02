let r;
var d = e => {
    if (!r) {
        const n = ({
            size: o = 24,
            ...t
        }, s) => e.createElement("svg", {
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            width: o,
            height: o,
            ref: s,
            ...t
        }, e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16M4 18h16"
        }));
        r = e.forwardRef(n)
    }
    return r
};
export {
    d as
    default
};