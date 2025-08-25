import React from 'react'

const Form = () => {
  
  const [User, setUser] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const submithandler = (e) => {
    e.preventDefault();
    console.log('User:', User, 'Email:', Email);
    setUser('');
    setEmail('');
  }
  return (
    <div>
     

 <form 
 onSubmit={submithandler}
        className="bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Simple Form</h2>

        <input
          type="text"
          name="name"
          value={User}
          placeholder="Enter your name"
         onChange={(e)=>{
          setUser(e.target.value)
          console.log(e.target.value)
         }}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          value={Email}
          onChange={(e)=>{
          setEmail(e.target.value)
          console.log(e.target.value)
         }}
          
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>















    </div>

  )
}

export default Form