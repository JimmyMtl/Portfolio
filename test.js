import fs from 'fs';
import path from "path";

const technologies = [{
    name: 'React.js',

},
    {
        name: 'Node.js',

    },
    {
        name: 'Next.js',

    }, {
        name: 'Sass',

    }, {
        name: 'PostgreSQL',

    }, {
        name: 'Docker',

    }, {
        name: 'Platform.sh',

    }, {
        name: 'TypeScript',

    }, {
        name: 'React.js',

    }, {
        name: 'Node.js',

    },
    {
        name: 'Next.js',

    },
    {
        name: 'Sass',

    },
    {
        name: 'PostgreSQL',

    },
    {
        name: 'Strapi',
    },
    {
        name: 'PM2',
    },
    {
        name: 'Nginx',
    }, {
        name: 'Shopify',

    }, {
        name: 'React',

    },
    {
        name: 'Sass',

    },
    {
        name: 'Docker',

    },
    {
        name: 'PM2',

    },
    {
        name: 'Nginx',
    }, {
        name: 'HTML',

    },
    {
        name: 'CSS',

    }, {
        name: 'JS',

    }]
technologies.forEach((technology) => {
    console.log(technology);
    // Asynchronous - Opening File
    console.log("opening file!");
    fs.open(path.join("/Users/jimmymartel/Documents/Projects/cvjmrtl", "src", "components", "01-Atoms", "SVG", technology.name+".tsx"), 'wx', function (err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("File open successfully");
    });
})
