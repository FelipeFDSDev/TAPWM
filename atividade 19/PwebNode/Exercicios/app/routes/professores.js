module.exports = function (app) {
    app.get('/professores', function (req, res) {
        //res.send("<html><body>Professores da FATEC Sorocaba</body></html>")
        res.render("informacao/professores")
    });
}