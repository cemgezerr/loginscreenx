import React from "react";
import Input from './input';
import {useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import  * as yup from 'yup';


const schema = yup.object({
    username:yup.string().required("İsminizi yazınız"),
    phoneNumber:yup.string().required("Numaranızı giriniz").matches(/([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,"(555)5555555 şeklinde bir numara giriniz"),
    email:yup.string().required("E-Postanızı giriniz").email("aaaaa@aaa.com şeklinde olmalıdır"),
    password:yup.string().required("Şifrenizi giriniz").min(6,"En az 6 karakter olmalı").max(18,"18 karakterden fazlası olamaz"),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"Şifreler Eşleşmiyor").required("Şifre Tekrarını Giriniz"),
})

function KayitOl() {
    
    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(schema)

    });
    console.log(errors);

    const formSubmit = data => {
        console.log(data);
    };

    return <div className="sign-up">
        <form onSubmit={handleSubmit(formSubmit)}>
            <Input id="username" label="Adınız" type="text" placeholder="Adınızı Giriniz" register={{...register("username")}} errorMesage={errors.username?.message} />
            <Input id="email" label="E-Mail" type="text" placeholder="E-Mailinizi giriniz" register={{...register("email")}}  errorMesage={errors.email?.message}/>
            <Input id="phoneNumber" label="Telefon Numaranız" type="text" placeholder="Telefon Numaranızı Giriniz" register={{...register("phoneNumber")}} errorMesage={errors.phoneNumber?.message} />
            <Input id="password" label="Şifre" type="password" placeholder="Şifrenizi Giriniz" register={{...register("password")}}  errorMesage={errors.password?.message}/>
            <Input id="confirmPassword" label="Şifre Tekrarı" type="password" placeholder="Şifrenizi Tekrar Giriniz" register={{...register("confirmPassword")}}  errorMesage={errors.confirmPassword?.message}/>
            <button className="btn">Kayıt Ol</button>
        </form>
    </div>
}
export default KayitOl;