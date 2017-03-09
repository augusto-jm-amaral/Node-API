module.exports = function(app) {
    app.listen(app.get('port'), () => {
        console.log('API Online ' + process.env.NODE_ENV + ' - porta ' + app.get('port'));
    });
};