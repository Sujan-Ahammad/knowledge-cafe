import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
                <h2>Question 1 : Let's compare props and state. Here's a definition of each ?</h2>
                <h4><li>Answer: "props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument.</li>
                    <li>State: "state" is data that changes over the lifetime of a specific instance of a React component.</li>
                    </h4>
            </div>
            <div >
                <h2>Question 2 : how does useState work ?</h2>
                <h4> <li>Answer: Hooks are special functions that let you "hook into" various React features within functional components. These hooks make certain features like working with data fun. For example, in class components, when you need to store and update a value, our code will look like this:</li></h4>

            </div>
            <div>
                <h2>Question 3 : what does useEffect can do ?</h2>
                <h4>
                     
                    <ul>
                        <li> Answer: 1:update the Document title dynamically based on component state or other variables</li>
                        <li>Answer: 2: Use Multiple 'useEffect' hooks within a single functional component to separate concerns and inprove readability</li>
                    </ul>
                </h4>
            </div>
            <div>
                <h2>Question 4 : How Does React Works ?</h2>
                <h4><ul><li>Answer: The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript</li></ul></h4>
            </div>
        </div>
    );
};

export default Question;