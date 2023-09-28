import React from "react"
import { Table } from "../types"

export type DataTableProps = {
    table: Table[]

}



export const DataTable: React.FC<DataTableProps> = ({ table }) => {

    return (
        <div className="">
            <h1 className="font-bold text-5xl"> Data Table Project </h1>
            <table >
                <thead>
                    <tr>
                        <th >firstname</th>
                        <th >lastname</th>
                        <th >email</th>
                        <th >phone</th>
                        <th >address</th>
                        <th >description</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map(t =>
                        <tr key={t.id}><td>{t.firstName}</td>
                            <td>{t.lastName}</td>
                            <td>{t.email}</td>
                            <td>{t.phone}</td>
                            <td>{t.address.city}
                                {t.address.state}
                                {t.address.streetAddress}
                                {t.address.zip}</td>
                            <td>{t.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}