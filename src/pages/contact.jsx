import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'

export default function Contact() {
  const validationSchema = object().shape({
    name: string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    email: string()
      .required('Email is required')
      .email('Invalid email address'),
    reachOut: string().required('This is required'),
    message: string().required('Message is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  // Form submission handler
  const onSubmit = async (data) => {
    // Do something with the form data
    console.log(data)
    // const data = new FormData(data);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`)
      }
      alert('Thanks for contacting us, we will get back to you soon!')
    } catch (err) {
      console.error(err)
      alert("We can't submit the form, try again later?")
    }
  }

  return (
    <Container className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="input-wrapper flex flex-col">
            <label className="font-lato-bold" htmlFor="name">
              Name
            </label>
            <input
              className="border-0.75 font-lato-light border-black p-5"
              type="text"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="input-wrapper flex flex-col">
            <label className="font-lato-bold" htmlFor="email">
              Email
            </label>
            <input
              className="border-0.75 font-lato-light border-black p-5"
              type="email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="input-wrapper mt-5 flex flex-col">
          <label className="font-lato-bold" htmlFor="reachOut">
            Womit kann ich Ihnen helfen?
          </label>
          <select
            id="reachOut"
            autoComplete="reachOut-name"
            className="border-0.75 font-lato-light border-black p-5"
            {...register('reachOut')}
          >
            <option>Mobile App-Entwicklung</option>
            <option>Web-Entwicklung</option>
            <option>Etwas anderes</option>
          </select>

          {errors.reachOut && (
            <p className="text-xs text-red-500">{errors.reachOut.message}</p>
          )}
        </div>

        <div className="input-wrapper mt-5 flex flex-col">
          <label className="font-lato-bold" htmlFor="message">
            Nachricht
          </label>
          <textarea
            id="message"
            rows={3}
            className="border-0.75 font-lato-light border-black p-5 text-gray-400"
            placeholder={
              'Wenn Sie möchten, können Sie mir mehr über Ihr Projekt erzählen...'
            }
            {...register('message')}
          />
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button className="mt-10 sm:w-1/2">Senden</Button>
      </form>
    </Container>
  )
}
