const path = require('path');

module.exports = {
    development: {
        sitename: 'Roux Meetups [Development]',
        serviceRegURL: 'http://localhost:3000',
        serviceVersionId: '1.x.x',
        data: {
            feedback: path.join(__dirname, '../data/feedback.json'),
        },
    },
    production: {
        sitename: 'Roux Meetups',
        serviceRegURL: 'http://localhost:3000',
        serviceVersionId: '1.x.x',
        data: {
            feedback: path.join(__dirname, '../data/feedback.json'),
        },
    },
};