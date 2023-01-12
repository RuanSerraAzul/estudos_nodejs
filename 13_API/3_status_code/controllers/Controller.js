module.exports = class Controller {
    static index(req, res) {
        res.status(200).json({
            message: "Hello World, primeiro endpoint criado com sucesso",
        });
    }

    static postProduct(req, res) {
        const name = req.body.name;
        const price = req.body.price;

        if (!name) {
            res.status(422).json({ message: "O campo nome é obrigatorio" });

            return;
        }

        res.status(201).json({
            message: `Produto ${name} foi criado com sucesso`,
        });
    }
};
