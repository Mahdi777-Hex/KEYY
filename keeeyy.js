function login() {
          // Kiểm tra logic đăng nhập của bạn ở đây
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
        
          if (username === "Sh4Ko" && password === "api-VIP-@SH4ko") {
            // Lưu tên đăng nhập và mật khẩu vào Local Storage
           // localStorage.setItem("username", username);
           //
localStorage.setItem("password", password);
        
            document.getElementById("login-form").style.display = "none";
            document.getElementById("checkbox-container").style.display = "block";
          } else {
            alert("Key Sai Sh4Ko ");
          }
        }
        
        // Kiểm tra nếu đã lưu tên đăng nhập và mật khẩu trong Local Storage
        // thì hiển thị giá trị đó trong form đăng nhập
        window.onload = function() {
          var savedUsername = localStorage.getItem("username");
          var savedPassword = localStorage.getItem("password");
        
          if (savedUsername && savedPassword) {
            document.getElementById("username").value = savedUsername;
            document.getElementById("password").value = savedPassword;
          }
        };
     window.alert("WELCOME TO PANEL SH4KO IOS");
 }
