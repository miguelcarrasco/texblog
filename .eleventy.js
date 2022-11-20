const katex = require("katex");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");

    eleventyConfig.addFilter("latexdisplay", (content) => {
        return content.replace(/\$\$([\s\S]+?)\$\$/g, (_, equation) => {
            equation = "\\displaystyle " + equation
            const cleanEquation = equation
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;/g, "&")
                .replace(/\\\n/g, "\\\\");
            // console.log(equation)

            return "<span class=\"katex-display\">"+katex.renderToString(cleanEquation, {
                throwOnError: false,
                output: "html",
            })+"</span>";
        });
    });

    eleventyConfig.addFilter("latex", (content) => {
        return content.replace(/\$([\s\S]+?)\$/g, (_, equation) => {
            const cleanEquation = equation
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;/g, "&")
                .replace(/\\\n/g, "\\\\");

            return katex.renderToString(cleanEquation, {
                throwOnError: false,
                output: "html",
            });
        });
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
