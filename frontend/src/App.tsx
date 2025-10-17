import { useState } from "react"
import "./App.css"
import { handleTestApi } from "./api/users"

function App() {
  const [users, setUsers] = useState("")
  const [loading, setLoading] = useState(false)

  async function fetchUsers() {
    setLoading(true)
    try {
      const data = await handleTestApi();
      setUsers(JSON.stringify(data, null, 2)) // format JSON nicely
    } catch (err) {
      setUsers("Error fetching users")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bun + Hono + React</h1>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      <br />
      <textarea
        value={users}
        readOnly
        style={{ width: "100%", height: "200px", marginTop: "1rem" }}
      />
    </div>
  )
}

export default App
