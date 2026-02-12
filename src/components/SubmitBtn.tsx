const SubmitBtn = ({text}: {text: string }) => {
    return (
        <button className="btn btn-primary" type="submit">
            {text}
        </button>
    );
};
export default SubmitBtn;