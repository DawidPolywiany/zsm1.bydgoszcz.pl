module.exports = {
    not_found: (req, res) => {
        res.status(404).render('not-found', Object.assign({},
            {meta: {
                description: "",
                keywords: "",
                title: "This page doesn't seem to exist."
            }},
            {svg: req.svg},
            req.nav
        ));
    }
}
