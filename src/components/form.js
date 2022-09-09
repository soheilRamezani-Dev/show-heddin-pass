import './form.css';
const Form = ()=>{
    return <>
        <form>
            <div className="form-group">
                <label htmlFor="password">
                    password:
                    <input type="password" name="password" placeholder="password" />
                    <i className="show-password-icon award-icon fa-solid fa-lg"></i>
                </label>
                
            </div>
        </form>
    </>
}

export default Form;