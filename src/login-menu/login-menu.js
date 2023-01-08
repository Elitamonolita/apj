import React from "react";
import "./login-menu.css"

const LoginMenu = () => {
    return (
     <div className="main-registration">
         <div className="second-registration-block">
             <h1 className="avtorization">Авторизация</h1>
             <p className="explanation line"> После регистрации на Сайте <br/>
                 и получите уникальное<br/>
                 имя пользователя (логин) и пароль.
             </p>
             <div className="placeholders-name">
                 <p className="username">Имя пользователя</p>
                 <div><input className="login" type="search" placeholder="Логин"/></div>
                 <p className="placeholders-password">Пароль(ключ)</p>
                 <div><input className="password" type="search" placeholder="Пароль"/></div>
                 <div type="button" class="login-button">Войти</div>
             </div>
     </div>
     </div>
    )
}
export default LoginMenu