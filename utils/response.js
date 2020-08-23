

function setSuccessResponseMessage(res, result, message) {
    return res.json({
        data: {
            success: true,
            message: message,
            user: result
        }
    })
}

function setSuccessResponseMessageItem(res, result, message) {
    return res.json({
        data: {
            success: true,
            message: message,
            items: result
        }
    })
}

function setFailResponseMessage(res, message) {
    return res.json({
        data: {
            success: false,
            message: message
        }
    })
}

module.exports = {setSuccessResponseMessage, setSuccessResponseMessageItem, setFailResponseMessage};