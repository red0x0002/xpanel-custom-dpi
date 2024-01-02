(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[649], {
    7807: function(t, e, l) {
        Promise.resolve().then(l.bind(l, 6479))
    },
    6479: function(t, e, l) {
        "use strict";
        l.r(e);
        var i = l(7437)
          , n = l(3198)
          , r = l(559)
          , s = l(5912);
        e.default = ()=>{
            let {dpi: t} = (0,
            n.v9)(t=>{
                let {dataSlice: e} = t;
                return e
            }
            );
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(null === t || (null == t ? void 0 : t.dpi) === "null" || (null == t ? void 0 : t.trackClickDpi)) && (0,
                i.jsx)(s.Z, {
                    showLoaderModal: null === t || (null == t ? void 0 : t.dpi) === "null" || (null == t ? void 0 : t.trackClickDpi)
                }), (0,
                i.jsx)("div", {
                    className: "lg:min-w-[260px] lg:max-w-[260px] lg:pl-3 flex justify-start  items-center ",
                    children: (0,
                    i.jsx)("div", {
                        className: "lg:min-w-[260px] lg:max-w-[260px] lg:flex grid grid-cols-2 justify-center items-start flex-col gap-5",
                        // modify the below values with whatever you want
                        children: ["400", "900", "1600", "1800", "3600"].map((e,l)=>(0,
                        i.jsx)("div", {
                            className: "border-white/40 p-1 rounded-md border flex",
                            children: (0,
                            i.jsxs)("div", {
                                onClick: ()=>{
                                    (0,
                                    r.xf)(4, 16, new Uint8Array([255 & parseInt(e), parseInt(e) >> 8 & 255])),
                                    (0,
                                    r.tn)(1)
                                }
                                ,
                                className: "".concat((null == t ? void 0 : t.dpi) === e ? "bg-zinc-200 text-black" : "text-white  ", " roboto-font font-[300]  lg:py-3 py-2 lg:px-5 cursor-pointer transition-all ease-in-out duration-300 hover:bg-zinc-200  hover:text-black text-center lg:min-w-[130px] min-w-[90px] rounded"),
                                children: [" ", e]
                            })
                        }, l))
                    })
                })]
            })
        }
    },
    5912: function(t, e, l) {
        "use strict";
        var i = l(7437);
        l(2265),
        e.Z = t=>{
            let {showLoaderModal: e} = t;
            return (0,
            i.jsx)("div", {
                className: "".concat(e ? "translate-y-0 opacity-1" : "translate-y-[1200px] opacity-0", " transition-all roboto-font ease-in-out duration-500  bg-black/40 fixed left-0 right-0 backdrop-blur-[2.5px] top-[60px] lg:top-[90px] bottom-[50px] z-[1002] flex items-center justify-center"),
                children: (0,
                i.jsxs)("div", {
                    className: "lds-roller",
                    children: [(0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {}), (0,
                    i.jsx)("div", {})]
                })
            })
        }
    }
}, function(t) {
    t.O(0, [306, 663, 645, 559, 971, 596, 744], function() {
        return t(t.s = 7807)
    }),
    _N_E = t.O()
}
]);
