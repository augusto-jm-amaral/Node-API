module.exports = function(app) {
    app.listen(app.get('port'), () => {
        console.log('API Online - porta ' + app.get('port'));
    });
};