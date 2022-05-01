/*
 https://www.codewars.com/kata/5a9ecd89fd5777e0790001ea/train/javascript
*/

const React = require("react")

class WishlistForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            wish: "",
            priority: 1,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.send(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    id="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
                />
                <textarea
                    id="wish"
                    value={this.state.wish} onChange={(e) => this.setState({wish: e.target.value})}
                />
                <select
                    id="priority"
                    value={this.state.priority}
                    onChange={(e) => this.setState({priority: e.target.value})}
                >
                    <option value="1"/>
                    <option value="2"/>
                    <option value="3"/>
                    <option value="4"/>
                    <option value="5"/>
                </select>
                <button/>
            </form>
        )
    }
}
