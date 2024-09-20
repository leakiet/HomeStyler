import React, { useEffect, useState } from "react";
import './Login.css';
import Swal from "sweetalert2";
function Login(props) {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUserInfo} = props;
    useEffect(()=>{
        fetch("/data/users.json")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(err=>console.log(err))
    },[])
    console.log("email,pass: ",email,password);
    
    const handleLogin = (e) => {
        e.preventDefault()
        // Tìm kiếm người dùng trong mảng JSON
        const user = users.find(
            (user) => user.email == email && user.password == password
        );
        setUserInfo(user);
        
        if (user) {
            Swal.fire({
                title: 'Đăng nhập thành công!',
                text: `Chào mừng, ${user.fullname}!`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Lỗi',
                text: 'Email hoặc mật khẩu không đúng!',
                icon: 'error',
                confirmButtonText: 'Thử lại'
            });
        }
    };
    console.log("users: ",users);
    
  return (
    <div>
      <section className="mt-2">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-floating mx-1"
                  >
                   <i class="fa-brands fa-facebook"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter a valid email address"
                  />
                  <label class="form-label text-start" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div data-mdb-input-init class="form-outline mb-3">
                  <input
                    type="password"
                       class="form-control form-control-lg"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-lg"
                    style={{paddingLeft: "2.5rem",paddingRight: "2.5rem"}}
                  >
                    Login
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
