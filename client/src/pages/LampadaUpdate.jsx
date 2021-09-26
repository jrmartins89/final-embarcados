import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class LampadaUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nomeLampada: '',
            voltagemLampada: '',
            comodoLampada: '',
            statusLampada:'',
        }
    }

    handleChangeInputNome = async event => {
        const nomeLampada = event.target.value
        this.setState({ nomeLampada })
    }

    handleChangeInputVoltagem = async event => {
        const voltagemLampada = event.target.value
        this.setState({ voltagemLampada })
    }

    handleChangeInputComodo = async event => {
        const comodoLampada = event.target.value
        this.setState({ comodoLampada })
    }

    handleChangeInputStatus = async event => {
        const statusLampada = event.target.value
        this.setState({ statusLampada })
    }

    handleUpdateLampada = async () => {
        const { id, nomeLampada, voltagemLampada, comodoLampada, statusLampada } = this.state
        const payload = { nomeLampada, voltagemLampada, comodoLampada, statusLampada }

        await api.updateLampadaById(id, payload).then(res => {
            window.alert(`Lampada atualizada com sucesso`)
            this.setState({
                nomeLampada: '',
                voltagemLampada: '',
                comodoLampada: '',
                statusLampada:'',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const lampada = await api.getLampadaById(id)

        this.setState({
            nomeLampada: lampada.data.data.nomeLampada,
            voltagemLampada: lampada.data.data.voltagemLampada,
            comodoLampada: lampada.data.data.comodoLampada,
            statusLampada: lampada.data.data.statusLampada
        })
    }

    render() {
        const { nomeLampada, voltagemLampada, comodoLampada, statusLampada } = this.state
        return (
            <Wrapper>
                <Title>Criar Lampada</Title>

                <Label>Nome: </Label>
                <InputText
                    type="text"
                    value={nomeLampada}
                    onChange={this.handleChangeInputNome}
                />

                <Label>Voltagem: </Label>
                <InputText
                    type="text"
                    value={voltagemLampada}
                    onChange={this.handleChangeInputVoltagem}
                />

                <Label>Comodo: </Label>
                <InputText
                    type="text"
                    value={comodoLampada}
                    onChange={this.handleChangeInputComodo}
                />

                <Label>Status Lampada: </Label>
                <InputText
                    type="text"
                    value={statusLampada}
                    onChange={this.handleChangeInputStatus}
                />

                <Button onClick={this.handleUpdateLampada}>Atualizar Lampada</Button>
                <CancelButton href={'/lampadas/list'}>Cancelar</CancelButton>
            </Wrapper>
        )
    }
}

export default LampadaUpdate
