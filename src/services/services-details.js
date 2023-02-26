export default class ServicesDetails {

    render () {
        const getProduct = async (url) => {
            const res = await  fetch(url);
            const body = await res.json();
            return body
        }
        getProduct('http://127.0.0.1:8080/geradin')
            .then((body) => {
                    return body
            })

    }
}
