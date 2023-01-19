//import { Component } from "react";
//import getAllData from "../API/Api";

/*class User extends Component {
  constructor(data) {
    super(data);
    this.data = data.data;

    //console.log(' This.data : ', this.data);
  }
}*/

class User {
  constructor(data) {
    this.data = data.data.data;
    //console.log(' This.data : ', this.data);
  }
}

export default User;