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

function openNewPage() {
        // Chuyển hướng đến trang mới
        window.location.href = "controller.php?view=create-post";
    }

function clickButtonAction(buttonName, callback ){
     const  button = document.querySelector(buttonName);
    button.addEventListener("click", () => {
       callback() ;
     });
 }
