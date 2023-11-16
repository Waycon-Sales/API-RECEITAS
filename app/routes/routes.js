const express = require('express')
const router = express.Router();

// Controladores

// Pagamento com cartão de crédito 
router.post('/', )
//router.put('/login', CreditSalesController.captureCreditPayment)
router.post('/registerUser', (req, res) => {
    console.log(req.body)
    return res.status(200).json({
        result:"Tudo certo"
    });
})

module.exports = router;