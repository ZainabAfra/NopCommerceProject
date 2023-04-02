
import { name, internet, phone } from 'faker';


function generateRandomData() {
    return {
      firstName: name.firstName(),
      lastName: name.lastName(),
      email: internet.email(),
      password: internet.password(),
      phoneNumber: phone.phoneNumber(),
    };
  }
  
  export default {
    generateRandomData,
  };
  