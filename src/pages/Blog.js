import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl text-center m-5 font-semibold'>Welcome to blog page</h2>
            <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div className='p-10 bg-green-200 m-5 rounded-xl'>
                <h2 className='text-2xl mb-3 font-semibold'>Question: what is the difference between SQL & non SQL ?</h2>
                <p>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='p-10 bg-pink-200 m-5 rounded-xl'>
                <h2 className='text-2xl mb-3 font-semibold'>Question: what is JWT? How does it works?</h2>
                <p>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.

                </p>
            </div>
            <div className='p-10 bg-orange-200 m-5 rounded-xl'>
                <h2 className='text-2xl mb-3 font-semibold'>Question: what is the difference between javascript & Node.js?</h2>
                <p>Ans: . NodeJS : 
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 
                <br />
                2. JavaScript : 
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
            </div>
            <div className='p-10 bg-purple-300 m-5 rounded-xl'>
                <h2 className='text-2xl mb-3 font-semibold'>Question: How does Node.js handle multiple request at the same time?</h2>
                <p>Ans: How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;