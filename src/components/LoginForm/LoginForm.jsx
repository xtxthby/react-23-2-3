import { Formik, Form, Field , ErrorMessage} from 'formik';
import styled from 'styled-components';
// валідація полів
import * as yup from 'yup';

// const schema = yup.object().shape({
//   login: yup.string().required(),
//   password: yup.string().min(6).max(16).required(),
// });

// const initialValues = {
//   login: '',
//   password: '',
// };

// const Input = styled(Field)`
//   color: #2a2a2a;
// `;

// export const LoginForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };

//   return (
//     <Formik
//         initialValues={initialValues}
//         validationSchema={schema}
//         //   збираємо усі значення усіх полів інпута при сабмиті
//         onSubmit={handleSubmit}
//     >
//       <Form autoComplete="off">
//         <label htmlFor="login">
//           Login
//           <Input type="text" name="login" />
//           <ErrorMessage name="login" component="div" />
//         </label>
//         <br />
//         <label htmlFor="password">
//           Password
//           <Input type="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//         </label>
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };




// ==================================================




// export const LoginForm = () => {
//     // це метод який не перерисовуе він не робить ререндер
//     // тобіш не перерендерить
//     const handleSubmit = event => {
//         event.preventDefault();
//         // const formElements = event.target.elements;
//         // або
//         const { login, password } = event.target.elements;
//         // отримаємо силку на сам елемент форми
//         // це обєкт в якому є element і так далі
//         // console.log(event.target.elements.login.input);
//         console.log(login.value, password.value);
//     };

//     return ({/* //   збираємо усі значення усіх полів інпута при сабмиті */ }
//         <form autoComplete = "off"  onSubmit = { handleSubmit }>
//             <label htmlFor="login">
//                 Login
//                 <input type="text" name="login" />
//             </label>
//             <br />
//             <label htmlFor="password">
//                 Password
//                 <input type="password" name="password" />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };



// ========================================================
// встановлення Форміка це провайдер з логікою

// // початкове значення інпутів полів
// const initialValues = {
//   login: '',
//   password: '',
// };

// export const LoginForm = () => {
//     // const handleSubmit = (values, actions) => { 
//     //     // за допомогою actions ми можемо ресетнути форму
//     //     console.log(values);
//     //     console.log(actions);
//     // };
//         деструктурізація
//     const handleSubmit = (values, {resetForm}) => { 
//         // за допомогою actions ми можемо ресетнути форму
//         console.log(values);
//         resetForm();
//     };




//     return (
//         // передамо силку на обєкт для інпутів , сабмітимо форму
//         < Formik initialValues={initialValues} onSubmit={handleSubmit}>
//             {/* робимо обгортку Form яка отримає з Formik пропси автоматом*/}
//             <Form autoComplete = "off">
//                 <label htmlFor="login">
//                     Login
//                     {/* замість  input ставимо обгортку Field*/}
//                     <Field type="text" name="login" />
//                 </label>
//                 <br />
//                 <label htmlFor="password">
//                     Password
//                     <Field type="password" name="password" />
//                 </label>
//                 <button type="submit">Submit</button>
//             </Form>
//         </Formik>
//     );
// };


// =======================================================
// стилізуємо

// // початкове значення інпутів полів
// const initialValues = {
//   login: '',
//   password: '',
// };

// export const LoginForm = () => {
   
//     // деструктурізація
//     const handleSubmit = (values, {resetForm}) => { 
//         // за допомогою actions ми можемо ресетнути форму
//         console.log(values);
//         resetForm();
//     };
//     // стилізуємо інпут і міняємо Field на Input 
//     const Input = styled(Field)`color: #2a2a2a;`;


//     return (
//         // передамо силку на обєкт для інпутів , сабмітимо форму
//         < Formik initialValues={initialValues} onSubmit={handleSubmit}>
//             {/* робимо обгортку Form яка отримає з Formik пропси автоматом*/}
//             <Form autoComplete = "off">
//                 <label htmlFor="login">
//                     Login
//                     {/* замість  input ставимо обгортку Field*/}
//                     <Input type="text" name="login" />
//                 </label>
//                 <br />
//                 <label htmlFor="password">
//                     Password
//                     <Input type="password" name="password" />
//                 </label>
//                 <button type="submit">Submit</button>
//             </Form>
//         </Formik>
//     );
// };


// ==================================================================
// валідація полів

// обробка полів на помилки де ми ставимо умови
const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});
// початкове значення інпутів полів
const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
   
    // деструктурізація
    const handleSubmit = (values, {resetForm}) => { 
        // за допомогою actions ми можемо ресетнути форму
        console.log(values);
        resetForm();
    };
    // стилізуємо інпут і міняємо Field на Input 
    const Input = styled(Field)`color: #2a2a2a;`;


    return (
        // передамо силку на обєкт для інпутів , силка на валідацію, сабмітимо форму
        < Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
            {/* робимо обгортку Form яка отримає з Formik пропси автоматом*/}
            <Form autoComplete = "off">
                <label htmlFor="login">
                    Login
                    {/* замість  input ставимо обгортку Field*/}
                    <Input type="text" name="login" />
                    {/* поле за допомогою якого виводиться помилки */}
                    <ErrorMessage component="div" name="login"/>
                </label>
                <br />
                <label htmlFor="password">
                    Password
                    <Input type="password" name="password" />
                    <ErrorMessage component="div" name="password"/>
                </label>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};



