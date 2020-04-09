import React from 'react';

export interface IDataProps {
    name: string;
    ageHolder: string;
    sex: string;
    address: string;
    callBackMethod: (callBackString: string) => string;
}

export default class Data extends React.Component<IDataProps> {
    render() {
        let { name, ageHolder, sex, address, callBackMethod } = this.props;
        let demographic: string;
        let age: number = Number(ageHolder);
        if (age > 0 && age < 30) {
            demographic = "Baby | Teenager | Youth";
        } else if (age > 30 && age < 65) {
            demographic = "Working Class";
        } else {
            demographic = "Retired | Senior";
        }

        return (
            <div>
                <h2>{name}'s Profile</h2>
                <p>My name is {name}. I am {age} and my gender is {sex}. I live in {address} and {callBackMethod(demographic)} </p>
            </div>
        );
    };
};
