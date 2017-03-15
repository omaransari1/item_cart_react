var NewItem = React.createClass({

    handleClick() {
    var name    = this.refs.name.value;
    var description = this.refs.description.value;

    $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },

    render() {
        return (
            <div>
                <input className="input-lg" ref='name' placeholder='Enter the name of cat' />&nbsp;&nbsp;
                <input className="input-lg" ref='description' placeholder='Enter breed' />
                  <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});