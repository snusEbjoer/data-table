import { useEffect, useState } from "react"
import { Table } from "./types"
import { DataTable } from "./components/DataTable"


const URL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'


async function fetchTable(): Promise<Table[]> {
  const res = await fetch(URL)
  const body = await res.json()
  return body
}

function App() {
  const [table, setTable] = useState<Table[]>([])
  const [flag, setFlag] = useState<boolean>(true)

  const sort = (e: React.MouseEvent<HTMLElement>, fieldname: keyof Table) => {
    e.preventDefault()
    if (flag === true) {
      setTable(table.sort((a, b) => a[fieldname] > b[fieldname] ? 1 : -1))
    } else {
      setTable(table.sort((a, b) => a[fieldname] > b[fieldname] ? -1 : 1))

    }
    setFlag(!flag)
  }




  useEffect(() => {
    fetchTable().then(setTable)
  }, [])



  return (
    <div>
      <DataTable table={table} />
    </div>
  )
}

export default App
