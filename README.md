<!DOCTYPE html>
<html>
<head>
    <title>Gửi dữ liệu với XMLHttpRequest</title>
    <script>
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
    </script>
</head>
<body>
    <h1>Gửi dữ liệu với XMLHttpRequest</h1>
    <form id="myForm">
        <label for="input1">Input 1:</label>
        <input type="text" id="input1" name="input1"><br><br> 

        <label for="input2">Input 2:</label>
        <input type="text" id="input2" name="input2"><br>

        <!-- Thêm các ô input khác nếu cần -->

        <input type="button" value="Gửi" onclick="sendData()">
    </form>
    <div id ="result"></div>
</body>
</html>

