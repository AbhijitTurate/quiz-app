import React from 'react'

const Start = ({ props }) => {
    const StartQuiz = () => props(true)
    return (
        <div>
            <h1 className='Heading'>
                Take the Quiz!!
            </h1>
            <h3 className='subHeading'>
                Whenever, you want
            </h3>
            <div className='start-button'>
            <button className='StartQuiz' onClick={StartQuiz}>
                Start Quiz
            </button>
            </div>
        </div>
    )
}

export default Start