/**
 * Created by siri on 2016-11-17.
 */

import React from 'react';

class DeliveryDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            deliveryOption: 'Primary'
        };
    }

    handleChange(event) {
        this.setState({ deliveryOption: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateFormData(this.state);
    }

    render() {
        return (
            <div>
                <h1>Choose your delivery options here.</h1>
                <div style={{width:200}}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       checked={this.state.deliveryOption === "Primary"}
                                       value="Primary"
                                       onChange={this.handleChange.bind(this)} />
                                Primary -- Next day delivery
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       checked={this.state.deliveryOption === "Normal"}
                                       value="Normal"
                                       onChange={this.handleChange.bind(this)} />
                                Normal -- 3-4 days
                            </label>
                        </div>

                        <button className="btn btn-success">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default DeliveryDetails;