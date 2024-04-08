import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus, RouteList } from '../../consts';
import { randomCity } from '../../utils';
import { FormEvent, useRef } from 'react';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/api-actions';
import { changeCity } from '../../store/action';

function LoginPage() : JSX.Element {
  const city = randomCity();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement|null>(null);
  const passwordRef = useRef<HTMLInputElement|null>(null);
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(changeCity({city:city}));
    navigate(RouteList.Root);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({email: emailRef.current.value, password: passwordRef.current.value}));
      if(authStatus === AuthorizationStatus.Auth) {
        navigate(RouteList.Root);
      }
    }
  };
  return (
    <div className="page page--gray page--login">
      <Header authStatus={authStatus}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div className="locations__item-link" onClick={onClick}>
                <span>{city}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
