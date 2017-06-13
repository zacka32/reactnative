import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE
} from './types';

export const EmployeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
//  EmployeeUpdate:EmployeeUpdate;
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
  //console.log(name, phone, shift);
};
