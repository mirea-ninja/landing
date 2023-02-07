import React, { useEffect, useRef, useState } from 'react'
import { feedbackURL, maxFeedbackContactLength, maxFeedbackTextLength } from '@/constants/constants'

interface FeedbackFormProps {
  projects: string[]
}

export default function FeedbackForm(props: FeedbackFormProps) {
  const [project, setProject] = useState('DEFAULT')
  const [text, setText] = useState('')
  const [contact, setContact] = useState('')

  async function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    const requestBody = { project, text, contact }

    const jsonBody = JSON.stringify(requestBody)
    const response = await fetch('api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': jsonBody.length.toString(),
      },
      body: jsonBody,
    })

    const data = await response.json()

    if (data.message) {
      alert(data.message)
    } else {
      alert('Ошибка отправки')
    }
    if (response.status == 200) {
      setProject('DEFAULT')
      setText('')
      setContact('')
    }
  }

  return (
    <div className='-mt-16 flex flex-col items-start justify-center m-auto w-full md:w-1/2 h-screen'>
      <h1 className='text-2xl font-bold text-start'>Отзывы и предложения</h1>
      <span className='mt-4'>
        Здесь Вы можете оставить отзыв о проектах Mirea Ninja или предложение по их улучшению.
      </span>
      <select
        onChange={(event) => setProject(event.target.value)}
        value={project}
        className='select select-bordered w-full mt-4'
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
          <span className='label-text'>
            Сообщение<span className='text-red'>*</span>
          </span>
          <span className='label-text-alt'>max длина {maxFeedbackTextLength} симв.</span>
        </label>
        <textarea
          onChange={(event) => setText(event.target.value)}
          value={text}
          placeholder='Во время использования сервиса возникли проблемы...'
          className='textarea textarea-bordered textarea-lg h-32'
          maxLength={maxFeedbackTextLength}
          required
        />
      </div>
      <div className='form-control w-full mt-4'>
        <label className='label'>
          <span className='label-text'>Контакты</span>
          <span className='label-text-alt'>max длина {maxFeedbackContactLength} симв.</span>
        </label>
        <input
          onChange={(event) => setContact(event.target.value)}
          value={contact}
          type='text'
          placeholder='t.me/username, email'
          className='input input-bordered input-md'
          maxLength={maxFeedbackContactLength}
        />
      </div>
      <button onClick={onClick} className='btn btn-accent mt-4'>
        Отправить
      </button>
    </div>
  )
}
