import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

// data types

// --> If we assign a type to variable, the variable can only access the what we assigned.

let name: string = "manu";  // string type

let number: number = 12345; // number type

let isStudent: boolean = true; // boolean type

let stringArray: string[] = ["manu", "sriman", "siva"]; //this variable can access elemnets types is string
// --> for number of array is ":number[]"

let trupleVariable: [number, string] = [2345, "23456"] // This type is called truple, It's have fixed length and type

// object 

let objectTypeVariable: object; //we can't assig like this because the object have key value pairs , so value can have number, string, .. etc.

//--> so we can use type here 

// type syntax

type Bike = {
    bikename: string;
    bikePrice: number;
    bikeWeight: number;
    bikeCC?: number;//optional 
}

let bikeObjectVariable: Bike = {
    bikename: "JAWA perak",
    bikePrice: 200000,
    bikeWeight: 170
}

// union --> it is for add more type to one varible

let numberAndStringvariable: number | string | string[];

numberAndStringvariable = "manu";
numberAndStringvariable = 1234567;
numberAndStringvariable = ['234', '1234', '12341'];

//funtions

function funtionVariable(x: string, y: number, z: string[] /* parameters and its types */): number /* number type for return,
 If function is not returning any value that time we can "void" type, it return undefind and "never" type for function never return anything */ {
    return 234;
}

funtionVariable("manu", 1234, ["manu", "sriman"]); // here passing arguments what we mention in parameters

// unknown(don't have data ntype) --> Suppose we don't know what type of data will come, that time we can use unknown;

let unknownvariable: unknown;

unknownvariable = [];
unknownvariable = "asdfg";









export default function TSBaics() {
    return (
        <div>

        </div>
    )
}
