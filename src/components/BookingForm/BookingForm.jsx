import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./BookingForm.module.css";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";
import DatePopoverField from "./DatePicker";

const today = new Date(); today.setHours(0,0,0,0);

const Schema = Yup.object({
    name: Yup.string().trim().min(2, "Too short").max(50, "Too long").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date().min(today, "Choose a future date").required("Required"),
    comment: Yup.string().max(500, "Max 500 chars"),
});

export default function BookingForm() {
    return (
    <div className={s.card}>
        <h3 className={s.title}>Book your campervan now</h3>
        <p className={s.subtitle}>Stay connected! We are always ready to help you.</p>

        <Formik
            initialValues={{ name: "", email: "", date: null, comment: "" }}
            validationSchema={Schema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                toast.success("Request sent! We will contact you soon.");
                resetForm();
                setSubmitting(false);
            }}>
            <Form noValidate>
                <Field name="name">
                    {({ field, meta }) => (
                        <>
                        <input
                            {...field}
                            placeholder="Name*"
                            autoComplete="name"
                            className={`${s.input} ${meta.touched && meta.error ? s.invalid : ""}`}
                        />
                        <ErrorMessage name="name" component="div" className={s.error} />
                        </>
                    )}
                </Field>
                <Field name="email">
                {({ field, meta }) => (
                    <>
                    <input
                        {...field}
                        type="email"
                        placeholder="Email*"
                        autoComplete="email"
                        className={`${s.input} ${meta.touched && meta.error ? s.invalid : ""}`}
                    />
                    <ErrorMessage name="email" component="div" className={s.error} />
                    </>
                )}
                </Field>
                <DatePopoverField name="date"/>
                <Field name="comment">
                {({ field, meta }) => (
                    <>
                    <textarea
                        {...field}
                        rows={4}
                        placeholder="Comment"
                        className={`${s.textarea} ${meta.touched && meta.error ? s.invalid : ""}`}
                    />
                    <ErrorMessage name="comment" component="div" className={s.error} />
                    </>
                )}
                </Field>
                <div className={s.containerBtn}><Button submit> Send</Button></div>
            </Form>
        </Formik>
    </div>
);
}
