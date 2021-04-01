module.exports = {
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Frontend Mentor - Countries";
            return args;
        });
    },
    outputDir: "docs",
};
