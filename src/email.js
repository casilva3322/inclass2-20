class Email extends React.Component {
    state = {}
    render() {
        return (
            <div class="form-group">
                <label for="emailInput">Email address</label>
                <input type="email" class="form-control" id="emailInput" aria-describedby="email" placeholder="Enter Email" />
            </div>

        );
    }
}