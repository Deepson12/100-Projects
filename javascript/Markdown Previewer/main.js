
const makeMarkdown = (text)=>{
    text = text.replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    text = text.replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    text = text.replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>')


    text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    text = text.replace(/~~(.*?)~~/gim, '<del>$1</del>');

    text = text.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

    text = text.replace(/`(.*?)`/gim, '<code>$1</code>');


    text = text.replace(/\n$/gim, '<br />');

    return text.trim();
}


const editor = document.getElementById("input");
const display = document.getElementById("result");


editor.addEventListener("input", ()=>{
    let text = editor.value.trim();
    let html = makeMarkdown(text);

    display.innerHTML = html
})