const fetch = require('isomorphic-unfetch');

module.exports = {
    distDir: "../../dist/client",
    exportTrailingSlash: true,
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            '/about': { page: '/about' }
        };

        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await res.json();
        const shows = data.map(entry => entry.show);

        shows.forEach(show => {
            paths[`/p/${show.id}`] = { page: '/p/[id]', query: { id: show.id } };
        });

        return paths;
    }
};