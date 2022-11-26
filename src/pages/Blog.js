import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl text-center m-5 font-semibold'>Welcome to blog page</h2>
            <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div className='p-10 bg-green-200 m-5 rounded-xl'>
                    <h2 className='text-2xl mb-3 font-semibold'>Question: What are the different ways to manage a state in a React application?</h2>
                    <p>Ans: Are you facing difficulties in making loading spinners or a pop-up appears at the right time? It can be because of an unmanaged state in React. A state is a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it is the interface between any data of changes (backend or local) and the representation of this data with UI elements in the frontend.
                        <br />
                        The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. Managing state is one of the hardest parts of any application, and that is why there are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.</p>
                </div>
                <div className='p-10 bg-purple-300 m-5 rounded-xl'>
                    <h2 className='text-2xl mb-3 font-semibold'>Question: React vs. Angular vs. Vue?</h2>
                    <p>Ans: There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                        Each framework is component-based and allows the rapid creation of UI features.

                        However, they all have a different structure and architecture</p>
                </div>
                <div className='p-10 bg-pink-200 m-5 rounded-xl'>
                    <h2 className='text-2xl mb-3 font-semibold'>Question: How does prototypical inheritance work?</h2>
                    <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
                <div className='p-10 bg-orange-200 m-5 rounded-xl'>
                    <h2 className='text-2xl mb-3 font-semibold'>Question: What is a unit test? Why should we write unit tests?</h2>
                    <p>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;