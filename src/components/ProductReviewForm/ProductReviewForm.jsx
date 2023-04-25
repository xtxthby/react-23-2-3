import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: red;
`;
// це стилизація <ErrorMessage>.  FormError отримує { name } і
// передає далі ErrorMessage а в нього є метод render який приймає що йому рендерить
// в даному випадку це ErrorText з стилями 
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];
// схема валідації
const validationSchema = Yup.object({
  // в дужки ми можемо передати текст помилки
  // назва продукту повинно бути одне із .oneOf(products) списку нижче який стоїть вище
  //  ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];
  product: Yup.string().required('Please select a product').oneOf(products),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  title: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().min(1).max(10).required(),
  // дата по замовченню default
  date: Yup.date().default(() => new Date()),
  // це чекбокс по дефолту false
  wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  //  чекбокс
  wouldRecommend: false,
  product: '',
};

export const ProductReviewForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <div>
          <label htmlFor="name">Full name</label>
          <div>
            <Field name="name" type="text" placeholder="Full name" />
            <FormError name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <div>
            <Field name="email" type="text" placeholder="Email address" />
            <FormError name="email" />
          </div>
        </div>
        <div>
          <label htmlFor="product">Product</label>
          <div>
            <Field name="product" as="select">
              <option value="">Select a product</option>
              {products.map((product, idx) => (
                <option value={product} key={idx}>
                  {product}
                </option>
              ))}
            </Field>
            <FormError name="product" />
          </div>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <div>
            <Field name="title" type="text" placeholder="Title" />
            <FormError name="title" />
          </div>
        </div>
        <div>
          <label htmlFor="review">Review</label>
          <div>
            <Field name="review" as="textarea" placeholder="Review" />
            <FormError name="review" />
          </div>
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <div>
            <Field name="rating" type="number" placeholder="Rating" />
            <FormError name="rating" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="wouldRecommend">
              <Field name="wouldRecommend" type="checkbox" />
              Would recommend
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};