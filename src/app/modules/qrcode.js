const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.qr-code-generator.com/v1/create/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

const qrCode = ((url) => {
   return axios({
        method: 'post',
        url: 'https://api.qr-code-generator.com/v1/create/',
        data: {
            frame_name: "no-frame",
            qr_code_text: url,
            image_format: "SVG",
            frame_color: "#000000",
            frame_text_color: "#ffffff",
            frame_icon_name: "mobile",
            frame_text: "Ir á Mesa",
            marker_left_template: "version13",
            marker_right_template: "version13",
            marker_bottom_template: "version13"
        }
    }, instance)
})

module.exports = qrCode