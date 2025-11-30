(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/knowledge/sanskrit-wisdom/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/knowledge/sanskrit-wisdom/page.tsx
__turbopack_context__.s([
    "default",
    ()=>YogaFoundationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/language-context.tsx [app-client] (ecmascript)"); // 修改导入路径
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function YogaFoundationPage() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])(); // 使用 Context
    const content = {
        en: {
            title: "Sanskrit Wisdom",
            subtitle: "Sanskrit Alphabet, Grammar & Sacred Chants",
            intro: "Systematic study of Sanskrit alphabet pronunciation, grammar rules, sandhi changes, and traditional chants, mantras and Vedic hymns with accurate pronunciation and meanings.",
            articles: [
                {
                    title: "ALPHABET & GRAMMAR",
                    subtitle: "Sanskrit Alphabet & Grammar System",
                    description: "Complete study of 16 vowels and 33 consonants with pronunciation points, writing rules, syllable division, sandhi changes and core grammatical structures.",
                    icon: "fas fa-language",
                    link: "/knowledge/sanskrit-wisdom/alphabet"
                },
                {
                    title: "SACRED CHANTS",
                    subtitle: "Sanskrit Sacred Sounds & Chant Collection",
                    description: "Learn traditional chants including seed syllables, short mantras, Vedic hymns, philosophical maxims, ritual recitations and peace invocations with accurate pronunciation and profound meanings.",
                    icon: "fas fa-om",
                    link: "/knowledge/sanskrit-wisdom/chants"
                }
            ]
        },
        zh: {
            title: "梵语智慧",
            subtitle: "梵语字母、语法与神圣唱诵",
            intro: "系统学习梵语字母发音、语法规则、连音变化，以及传统唱诵、曼陀罗和吠陀赞歌，掌握准确的发音和深刻含义。",
            articles: [
                {
                    title: "字母语法",
                    subtitle: "梵语字母与语法体系",
                    description: "完整学习16个元音和33个辅音的发音要点、书写规则、音节划分、连音变化和核心语法结构。",
                    icon: "fas fa-language",
                    link: "/knowledge/sanskrit-wisdom/alphabet"
                },
                {
                    title: "圣音唱诵",
                    subtitle: "梵语圣音与唱诵集",
                    description: "学习传统唱诵，包括种子音节、短咒、吠陀赞歌、哲学格言、仪式诵文和平安祈请，掌握准确的发音和深刻含义。",
                    icon: "fas fa-om",
                    link: "/knowledge/sanskrit-wisdom/chants"
                }
            ]
        }
    };
    const pageContent = content[language] || content.en;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-title",
                            children: pageContent.title
                        }, void 0, false, {
                            fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-subtitle",
                            children: pageContent.subtitle
                        }, void 0, false, {
                            fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-description",
                            children: pageContent.intro
                        }, void 0, false, {
                            fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "articles-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "articles-grid",
                        children: pageContent.articles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: article.link,
                                className: "article-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "article-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: article.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "article-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "article-subtitle",
                                                children: article.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: article.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/knowledge/sanskrit-wisdom/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(YogaFoundationPage, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = YogaFoundationPage;
var _c;
__turbopack_context__.k.register(_c, "YogaFoundationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_knowledge_sanskrit-wisdom_page_tsx_d36d33e2._.js.map