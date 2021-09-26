import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateLampada extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/lampadas/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Atualizar</Update>
    }
}

class DeleteLampada extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Voce quer deletar a lampada ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteLampadaById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Excluir</Delete>
    }
}

class LampadasList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lampadas: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllLampadas().then(lampadas => {
            this.setState({
                lampadas: lampadas.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { lampadas, isLoading } = this.state

        const columns = [
            {
                Header: 'ID_Lampada',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Nome_Lampada',
                accessor: 'nomeLampada',
                filterable: true,
            },
            {
                Header: 'Voltagem_Lampada',
                accessor: 'voltagemLampada',
                filterable: true,
            },
            {
                Header: 'Comodo_Lampada',
                accessor: 'comodoLampada',
                filterable: true,
            },
            {
                Header: 'Status_Lampada',
                accessor: 'statusLampada',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteLampada id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateLampada id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!lampadas.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={lampadas}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default LampadasList
