require('dotenv').config();

const host = process.env.SONAR_HOST;
const projectKey = process.env.SONAR_PROJECT_NAME;

console.log(host, projectKey);

const fetch = require('node-fetch');

fetch(`${host}/api/qualitygates/project_status?projectKey=${projectKey}`)
    .then(res => res.json())
    .then(body => {
        if (body.projectStatus.status !== "OK"){
            console.error('Quality Gate error!');
            console.error(body.projectStatus.status);
            process.exit(1);
        }
        else{
            console.log('Quality Gate passed');
            process.exit(0);
        }
    });