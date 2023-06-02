const  textarea = document. getElementById('tieude');
    textarea.addEventListener('input', () => {
        textareaHeight();
    });
    window.addEventListener(
        'DOMContentLoaded', () => {
            textareaHeight();
        });
        
    function textareaHeight(){
        textarea.style.height ='auto';
        textarea.style.height = textarea.scrollHeight +'px';
    }



