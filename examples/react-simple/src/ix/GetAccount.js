import React, {useState} from "react"
import * as sdk from "@onflow/sdk"

export const GetAccount = () => {
  const [result, setResult] = useState(null)
  const [addr, setAddr] = useState("")

  const run = async () => {
    const response = await sdk.send(await sdk.build([
      sdk.getAccount(addr)
    ]), { node: "http://localhost:8080" })
    setResult(await sdk.decodeResponse(response))
  }

  return (
    <div>
      <input placeholder="acct#" onChange={e => setAddr(e.target.value)} />
      <button onClick={run}>
        Run <strong>GetAccount</strong> for: {addr || "_____"}
      </button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}
