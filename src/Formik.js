import React, {useState} from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Modal } from './Modal';


const validationSchema = yup.object().shape({
  userName: yup.string().required('Обязательное поле'),
  email: yup.string().required('Обязательное поле').email('Неверный адрес'),
  password: yup.string().min(6).required('Обязательное поле').matches(/Q|W|E|R|T|Y|U|I|O|P|A|S|D|F|G|H|J|K|L|Z|X|C|V|B|N|M/, 'Некорректный пароль'),
  confirmPassword: yup.string().required('Обязательное поле').oneOf([yup.ref("password"), null], "Пароли не совпадают"),
  dateOfBirth: yup.string().required('Обязательное поле'),
  gender: yup.string().required('Обязательное поле'),
  phone: yup.string().required('Обязательное поле'),
})



export const RegistrationForm = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  return (
    <Formik initialValues={
      { userName: '' }
    }
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        setValue(JSON.stringify(values, {},5))
        setShow(true)
      }}
    >
      <Form className='App__input-holder'>
        <div className='App__input-item'>
          <label >Имя пользователя</label>
          < Field type='text' id='userName' name='userName'
            validate={validationSchema} />
          <ErrorMessage className='App__error' name='userName' component='div'></ErrorMessage>
        </div>
        <div className='App__input-item'>
          <label >Электронная почта</label>
          < Field type='email' id='email' name='email'
            validate={validationSchema} />
          <ErrorMessage className='App__error' name='email' component='div'></ErrorMessage>
        </div>
        <div className='App__input-item'>
          <label >Пароль</label>
          < Field type='password' id='password' name='password'
            validate={validationSchema} />
          <ErrorMessage className='App__error' name='password' component='div'></ErrorMessage>
        </div>
        <div className='App__input-item'>
          <label >Подтверждение пароля</label>
          < Field type='password' id='confirmPassword' name='confirmPassword'
            validate={validationSchema} />
          <ErrorMessage className='App__error' name='confirmPassword' component='div'></ErrorMessage>
        </div>
        <div className='App__input-item'>
          <label >Дата рождения</label>
          < Field type='date' id='dateOfBirth' name='dateOfBirth'
            validate={validationSchema} />
          <ErrorMessage className='App__error' name='dateOfBirth' component='div'></ErrorMessage>
        </div>
        <div className='App__input-item input-item'>
          <label >Пол</label>
          <div className='input-item__holder'>
            <label className='input-item__gender'>
              < Field type='radio' name='gender' value='мужской'
                validate={validationSchema} />
              Мужской
            </label>
            <label className='input-item__gender'>
              < Field type='radio' name='gender' value='женский'
                validate={validationSchema} />
              Женский
            </label>
          </div>
          <ErrorMessage className='App__error' name='gender' component='div'></ErrorMessage>
        </div>
        <div className='App__input-item'>
          <label >Telephone</label>
          < Field type='tel' id='phone' name='phone'
            validate={validationSchema} />
          <ErrorMessage className='App__error' name='phone' component='div'></ErrorMessage>
        </div>
        <Modal show={show} value={value} onClose={()=>setShow(false) } />
        <button type='submit'>зарегистрироваться</button>
      </Form>
    </Formik>


    // <Formik initialValues={{ username: '', email: '', password: '', confirmPassword: '', data: '', MW: '', telephone: '' }}
    //   onSubmit={(values) => {
    //     console.log(values);
    //   }}
    // >
    //   <Form>
    //     <Field type='text' name='username' placeholder='Имя пользователя'
    //       validate={(value) => {
    //         let error;
    //         if (!value) {
    //           error = 'Поле обязательно'
    //         }

    //         return error;
    //       }}
    //     />
    //     <ErrorMessage name='username' component='div' />
    //     <Field type='email' name='email' placeholder='Электронная почта'
    //       validate={(value) => {
    //         let error;
    //         if (!value) {
    //           error = 'Поле обязательно'
    //         } else if (!/\S+@\S+\.\S+/.test(value)) {
    //           error = 'Некорректный адрес'
    //         }
    //         return error;
    //       }}
    //     />
    //     <ErrorMessage name='email' component='div' />
    //     <Field type='password' name='password' id='password' placeholder='Пароль'
    //       validate={validationSchema}
    //     />
    //     <ErrorMessage name='password' component='div' />
    //             <Field type='password' name='confirmPassword' id='confirmPassword' placeholder='Подтверждение пароля'
    //       validate={validationSchema}
    //     />
    //     <ErrorMessage name='confirmPassword' component='div' />
    //     <Field type='date' name='data' placeholder='Дата рождения'

    //     />
    //     <ErrorMessage name='data' component='div'
    //       validate={(value) => {
    //         let error;
    //         if (!value) {
    //           error = 'Поле обязательно'
    //         }
    //       }}
    //     />
    //     <div>
    //       <label className="radio-label">
    //         <Field
    //           className="radio"
    //           type="radio"
    //           name="MW"
    //           value="мужской"
    //         />
    //         Мужской
    //       </label>
    //       <label className="radio-label">
    //         <Field
    //           className="radio"
    //           type="radio"
    //           name="MW"
    //           value="женский"
    //         />
    //         Женский
    //       </label>
    //     </div>
    //     <ErrorMessage name='MW' component='div' />
    //     <Field type='tel' name='telephone' placeholder='Телефон'
    //       validate={(value) => {
    //         let error;
    //         if (!value) {
    //           error = 'Поле обязательно'
    //         }
    //       }}
    //     />
    //     <ErrorMessage name='telephone' component='div' />
    //     <button type='submit'>зарегистрироваться</button>
    //   </Form>
    // </Formik>
  )
}