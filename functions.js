const  textarea = document. getElementById('tieude');
    textarea.addEventListener('input', () => {
        textareaHeight();
    });
    window.addEventListener(
        'DOMContentLoaded', () => {
            textareaHeight();
        });
      // hàm tự động co giãn nội dung của thẻ textarea   
    function textareaHeight(){
        textarea.style.height ='auto';
        textarea.style.height = textarea.scrollHeight +'px';
    }



