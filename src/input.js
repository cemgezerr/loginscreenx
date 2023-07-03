export default function İnput( {id, label, placeholder,type, register, errorMesage}) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} {...register}/>
            <span className="error-message">{errorMesage}</span>
        </div>
    )
}