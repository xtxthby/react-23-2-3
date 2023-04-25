import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';
// import { LoginForm } from './LoginForm/LoginForm';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <LoginForm /> */}
        <ProductReviewForm />
      </>
    );
  }
}
// ==========================================================

// // побудова контрольованого елемента
// export class App extends Component {
//   // так як це стейт і він з верху а не з низу
//   // то фільтир контрольований елемент
//   state = {
//     filter: '',
//   };
//   render() {
//     return (
//       <>
//         <GlobalStyle />
//         {/* <LoginForm /> */}
//         <ProductReviewForm />
//         <Filter
//           // тут метод для зміни 
//           // і поточне значення стейту value   
//           onChange={event => this.setState({ filter: event.target.value })}
//           // кожен раз контролюємозначення із стейта
//           value={this.state.filter}
//         />  
//         </>
//     );
//   }
// }
// function Filter({ onChange, value }) {
//   // в інтерфейсі тепер буде відображено те що записано в стейті value вище дивись
//   return <input type="text" onChange={onChange} value={value} />;
// }