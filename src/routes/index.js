const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    // req.session.my_variable = 'Hello World!';
    req.session.user_data = {email, password};
    req.flash('success', 'Now You are Registered')
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    // console.log(req.session.my_variable);
    const user = req.session.user_data;
    delete req.session.user_data;

    res.render('profile', {
        user
    });
});

router.get('/products', (req, res) => {
    res.render('products')
});

module.exports = router;