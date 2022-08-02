import axios from 'axios'
import React from 'react'

// type LoginPageProps = {}
const LoginPage = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const userExists = await axios.get(
      `http://localhost:3333/users?email_like=${email}`
    )
    console.log(userExists)
  }
  return (
    <form className="flex" onSubmit={(e) => handleLogin(e)}>
      <h1>Bootycamp Login</h1>
      <div className="flex-col">
        <input
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex-col">
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
      <button>Cadastrar-se</button>
    </form>
  )
}

export default LoginPage
