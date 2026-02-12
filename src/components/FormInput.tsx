interface FormInputType {
    name: string;
    label: string;
    defaultValue: string;
    type: string;
}
const FormInput = ({label,name, type, defaultValue}:FormInputType) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input type={type} name={name} placeholder="Type here" className="input input-bordered" defaultValue={defaultValue} />

        </div>
    );
};

export default FormInput;