class Form extends React.Component {
    state = {
        email: "",
        password: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$" //attempt at validating password, did not work
    }
    render() {
        return (
            <form className="form bg-dark text-white p-5">
                <Email />
                <Password />
                <Submit />
            </form>
        );
    }
    
}