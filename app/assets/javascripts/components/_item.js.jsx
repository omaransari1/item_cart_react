var Item = React.createClass({

    getInitialState() {
        return {editable: false}
    },

    handleEdit() {
        if(this.state.editable) {
        var id = this.props.item.id;
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        var item = {id: id , name: name , description: description};
        this.props.handleUpdate(item);

    }
        this.setState({editable: !this.state.editable})
    },

    render() {
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>Name: {this.props.item.name}</h3>;
        var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p className="coolfont">Breed: {this.props.item.description}</p>;

        return (
            <div className="eachcat">
                {name}
                {description}              
                    <button className="btn btn-primary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                    <button className="btn btn-danger" onClick={this.props.handleDelete}>Delete</button>
            </div>
        )
    }
});