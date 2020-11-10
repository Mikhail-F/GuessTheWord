function getWord() {
    let promice = axios.get('https://puzzle.mead.io/puzzle?wordCount=3')
    return promice.then(item => {
        return item.data
    })
}