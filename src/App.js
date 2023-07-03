import İnput from './input';
import {useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import  * as yup from 'yup';

const schema = yup.object({
    username:yup.string().required("İsminizi yazınız"),
    phoneNumber:yup.string().required("Numaranızı giriniz").matches(/([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,"(555)5555555 şeklinde bir numara giriniz"),
    email:yup.string().required("E-Postanızı giriniz").email("aaaaa@aaa.com şeklinde olmalıdır"),
    password:yup.string().min(6,"En az 6 karakter olmalı").max(18,"18 karakterden fazlası olamaz")
})

function App() {
    
    const {handleSubmit,register,formState:{errors},} = useForm({
        resolver:yupResolver(schema)

    });
    console.log(errors);

    const formSubmit = data => {
        console.log(data);
    };

    return <div className="sign-up">
        <form onSubmit={handleSubmit(formSubmit)}>
            <h1>Giriş Yap</h1>
            <İnput id="username" label="Adınız" type="text" placeholder="Enter Username" register={{...register("username")}} errorMesage={errors.username?.message} />
            <İnput id="email" label="E-Mail" type="text" placeholder="Enter E-Mail" register={{...register("email")}}  errorMesage={errors.email?.message}/>
            <İnput id="phoneNumber" label="Telefon Numaranız" type="text" placeholder="Enter Phone Number" register={{...register("phoneNumber")}} errorMesage={errors.phoneNumber?.message} />
            <İnput id="password" label="Şifre" type="password" placeholder="Enter Password" register={{...register("password")}}  errorMesage={errors.password?.message}/>
            <button>Sign Up</button>
        </form>
    </div>
}
export default App;