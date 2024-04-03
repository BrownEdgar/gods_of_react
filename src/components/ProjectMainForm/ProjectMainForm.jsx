import React from "react";
import "./ProjectMainForm.scss";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const initialValues = { name: "", description: "", price: "" };

export default function ProjectMainForm({ addProduct }) {
  const handleSubmit = (values) => {
    const product = {
      id: nanoid(5),
      name: values.name,
      description: values.description,
      price: values.price,
      image: `./cocktail/${values.file}`,
    };
    addProduct(product);
  };

  return (
    <div className="ProjectMainForm">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {(formik) => {
          return (
            <Form>
              <Field input="text" name="name" placeholder="Title" />
              <Field
                as="textarea"
                name="description"
                placeholder="Description..."
                className="textarea"
              />
              <Field input="text" name="price" placeholder="Price" />
              <label className="label" htmlFor="image"></label>
              <Field
                type="file"
                name="image"
                onChange={(e) => {
                  formik.setFieldValue("file", e.target.files[0].name);
                }}
              />
              <input type="submit" value="Add product" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
