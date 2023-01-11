module.exports = class Controller {
    static index(req, res) {
        res.json({
            message: "Hello World, primeiro endpoint criado com sucesso",
        });
    }

    static postProduct(req, res) {
        const name = req.body.name;
        const price = req.body.price;

        res.json({
            message: `Produto ${name} foi criado com sucesso`,
        });
    }
};
