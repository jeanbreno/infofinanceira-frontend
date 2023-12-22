import React from 'react'

export default props => {

    const rows = props.perfil.map( perfil => {
        return (
            <tr key={perfil.id}>
                <td>{perfil.nome}</td>
                <td>{perfil.email}</td>
                <td>
                    <button type="button"   title="Editar"
                        className="btn btn-primary"
                        onClick={e => props.editAction(perfil.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
