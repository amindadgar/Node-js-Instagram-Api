


module.exports = sendData = (rows, res) => {
    res.status(200)
    if (rows[0].length != 0) {
        const sendobject = {
            available: true,
            data: rows[0]
        };
        res.send(sendobject);
    } else {
        const sendobject = {
            available: false,
            data: {}
        };
        res.send(sendobject);
    }
}