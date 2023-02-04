import React, { useRef } from 'react'
import { maxFeedbackContactLength, maxFeedbackTextLength } from '@/constants/constants'

interface FeedbackFormProps {
  projects: string[]
}

interface FeedbackRequestBody {
  service: string
  text: string
  contact: string
}

export default function FeedbackForm(props: FeedbackFormProps) {
  const projectSelector = useRef(null)
  const feedbackInput = useRef(null)
  const contactInput = useRef(null)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const requestBody: FeedbackRequestBody = {
      // @ts-ignore
      service: projectSelector.current?.value || '',
      // @ts-ignore
      text: feedbackInput.current?.value || '',
      // @ts-ignore
      contact: contactInput.current?.value || '',
    }
    console.log(requestBody)
  }

  return (
    <form
      onSubmit={onSubmit}
      className='-mt-16 flex flex-col items-start justify-center m-auto w-full md:w-1/2 h-screen'
    >
      <h1 className='text-2xl font-bold text-start'>Отзывы и предложения</h1>
      <span className='mt-4'>
        Здесь Вы можете оставить отзыв о проектах Mirea Ninja или предложение по их улучшению.
      </span>
      <select
        ref={projectSelector}
        className='select select-bordered w-full mt-4'
        defaultValue='DEFAULT'
        required
      >
        <option key={-1} value='DEFAULT' disabled>
          Выберите проект
        </option>
        {props.projects.map((project, index) => (
          <option key={index} value={project}>
            {project}
          </option>
        ))}
      </select>
      <div className='form-control w-full mt-4'>
        <label className='label'>
          <span className='label-text'>Сообщение</span>
          <span className='label-text-alt'>Макс. длина {maxFeedbackTextLength} симв.</span>
        </label>
        <textarea
          ref={feedbackInput}
          placeholder='Во время использования сервиса возникли проблемы...'
          className='textarea textarea-bordered textarea-lg h-32'
          maxLength={maxFeedbackTextLength}
          required
        />
      </div>
      <div className='form-control w-full mt-4'>
        <label className='label'>
          <span className='label-text'>Контакты</span>
        </label>
        <input
          ref={contactInput}
          type='text'
          placeholder='t.me/username, email'
          className='input input-bordered input-md'
          maxLength={maxFeedbackContactLength}
        />
      </div>
      <button type='submit' className='btn btn-accent mt-4'>
        Отправить
      </button>
    </form>
  )
}
