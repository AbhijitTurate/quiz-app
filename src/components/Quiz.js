import React from 'react'

const Quiz = (props) => {


    const ele = props.quiz

    //function handleClick()

    let styles = {
        backgroundColor: '#3e8e41'

    }

    return (
        <div className='quiz-app'>
            {ele.map((item) => {
                return (
                    <>
                        <div className='question' dangerouslySetInnerHTML={{ __html: item.question }} key={item.question}></div>


                        <div className='Options'>
                            {
                                item.answers.map((answer) => {
                                    return (
                                        <button className='quiz-options' key={answer} onClick={() => props.optionSelection(item.question, answer)}>{answer}</button>)
                                }
                                )}
                        </div>
                        <hr></hr>
                    </>
                )
            }
            )

            }

            {
                props.finish ? <>
                    <p className='quiz-result'>{props.result} </p> <button className='quiz-PlayAgain' onClick={() => window.location.reload()}>Play Again</button> </> :
                    <button className='quiz-check' onClick={props.showScore}> Check answers</button>
            }


        </div>
    )
}

export default Quiz