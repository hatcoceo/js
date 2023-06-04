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

function clickButtonAction(buttonId, callback ){
     const  button = document.querySelector(buttonId);
    button.addEventListener("click", () => {
       callback() ;
     });
 }

function sendData() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'Views/trangb.php', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Hiển thị dữ liệu trả về từ máy chủ PHP
                    var responseData = xhr.responseText;
                   document. getElementById("result").innerHTML = responseData;
                   // xóa dữ liệu ô input sau khi nhận dữ liệu trả về 
                   document.getElementById('input1').value ='';
                }
            };
              var formData = new FormData(document.getElementById('myForm'));
            xhr.send(formData);
        }
