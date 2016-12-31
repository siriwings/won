/**
 * Created by siri on 2016-11-17.
 */

import React from 'react';
import BookList from './BookList';
import DeliveryDetails from './DeliveryDetails';
import ShippingDetails from './ShippingDetails';

class BookStore extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentStep:1,
            formValues:{}
        };
    }

    updateFormData(formData) {
        var formValues = Object.assign({}, this.state.formValues, formData);
        var nextStep = this.state.currentStep + 1;
        console.log(formValues);
        this.setState({currentStep: nextStep, formValues: formValues});
    }

    render() {
        switch (this.state.currentStep) {
            case 1:
                return <BookList updateFormData={this.updateFormData.bind(this)} />;
            case 2:
                return <ShippingDetails updateFormData={this.updateFormData.bind(this)} />;
            case 3:
                return <DeliveryDetails updateFormData={this.updateFormData.bind(this)} />;
            case 4:
                return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData.bind(this)}/>;
            case 5:
                return <Success data={this.state.formValues}/>;
            default:
                return <BookList updateFormData={this.updateFormData.bind(this)} />;
        }
    }

}

class Success extends React.Component{
    render() {
        var numberOfDays = "1 to 2 ";

        if (this.props.data.deliveryOption === 'Normal') {
            numberOfDays = "3 to 4 ";
        }
        return (
            <div>
                <h2>
                    Thank you for shopping with us {this.props.data.fullName}.
                </h2>
                <h4>
                    You will soon get {this.props.data.selectedBooks.join(", ")} at {this.props.data.shippingAddress} in approrximately {numberOfDays} days.
                </h4>
            </div>
        );
    }
}

class Confirmation extends React.Component{
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateFormData(this.props.data);
    }

    render() {
        return (
            <div>
                <h1>Are you sure you want to submit the data?</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <strong>Full Name</strong> : { this.props.data.fullName }
                    </div><br/>
                    <div>
                        <strong>Contact Number</strong> : { this.props.data.contactNumber }
                    </div><br/>
                    <div>
                        <strong>Shipping Address</strong> : { this.props.data.shippingAddress }
                    </div><br/>
                    <div>
                        <strong>Selected books</strong> : { this.props.data.selectedBooks.join(", ") }
                    </div><br/>
                    <button className="btn btn-success">
                        Place order
                    </button>
                </form>
            </div>
        );
    }
}

export default BookStore;