import { useForm } from 'react-hook-form';
import './App.css';

// yup & react-hook tutorial
// https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98

function App() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    name: '',
    email: '',
    userMessage: '',
  });

  console.log(errors);
  // watch tracks only the given variable and does not cause a re-render! so it could be useful for displaying the entered value elsewhere!!!
  // console.log(watch('name'))

  return (
    <div className='App'>
      <div className='formContainer'>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <label htmlFor='name'>
            Name
            <input
              type='text'
              {...register('name', { required: 'This is required' })}
              placeholder='Enter your name'
            />
          </label>
          <p>{errors.name?.message}</p>
          <label htmlFor=''>
            Surname
            <input
              type='email'
              {...register('email', { required: 'This is required' })}
              placeholder='test@gmail.com'
            />
          </label>
          <p>{errors.email?.message}</p>
          <label htmlFor=''>
            Message
            <textarea
              {...register('userMessage', {
                required: 'please enter your message',
                minLength: {
                  value: 5,
                  message: 'please enter more than 5 characters',
                },
              })}
              cols='30'
              rows='10'
            ></textarea>
          </label>
          <p>{errors.userMessage?.message}</p>
          <input type='submit' />
          <button onClick={() => { reset()}}>reset</button>
        </form>
      </div>
    </div>
  );
}

export default App;
