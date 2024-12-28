export class EmployeeModel {
    empId: number;
    name: string;
    emailId: string;
    contactNo: string;
    address: string;
    city: string;
    state: string;
    pincode: string;

    constructor(){
        this.empId = 0;
        this.name = '';
        this.emailId = '';
        this.contactNo = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.pincode = '';
    }
}