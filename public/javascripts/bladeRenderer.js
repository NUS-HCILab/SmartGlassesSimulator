let status = document.getElementById('status')
let text = document.getElementById('subheading')
let utterance = document.getElementById('content')

export const renderData = (data) => {
    status.innerHTML = data.status;
    text.innerHTML = data.subheading;
    utterance.innerHTML = data.content;
}