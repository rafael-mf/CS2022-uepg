'use strict';
const express = require('express');

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Back-end comissões",
        version: "0.0.1"
    });
});

module.exports = router;