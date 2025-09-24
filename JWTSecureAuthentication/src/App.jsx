import './App.css'

function App() {
  return (
    <><div className='flex justify-center items-center h-screen'>
     <div className='boredr-2 bg-green-600 p-4 text-white font-bold text-xl'>
      <h1 className='text-3xl text-center py-5'>Register</h1>
      <div>
        <div>Name</div>
        <div><input type="text"  className='border bg-white text-black mb-2'/></div>
      </div>
      <div>
        <div>Email</div>
        <div><input type="email" name=""  /></div>
      </div>
      <div>
        <div>Password</div>
        <div><input type="password" name=""  /></div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
