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

class LampadaInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nomeLampada: '',
            voltagemLampada: '',
            comodoLampada: '',
            statusLampada: '',
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

    handleChangeInputStatusLampada = async event => {
        const statusLampada = event.target.value
        this.setState({ statusLampada })
    }

    handleIncludeLampada = async () => {
        const { nomeLampada, voltagemLampada, comodoLampada, statusLampada } = this.state
        const payload = {nomeLampada, voltagemLampada, comodoLampada, statusLampada}

        await api.insertLampada(payload).then(res => {
            window.alert(`Lampada inserida com sucesso!`)
            this.setState({
                nomeLampada: '',
                voltagemLampada: '',
                comodoLampada: '',
                statusLampada: '',
            })
        })
    }

    render() {
        const { nomeLampada, voltagemLampada, comodoLampada, statusLampada } = this.state
        return (
            <Wrapper>
                <Title>Criar Medição</Title>

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

                <Label>Status da lâmpada: </Label>
                <InputText
                    type="text"
                    value={statusLampada}
                    onChange={this.handleChangeInputStatusLampada}
                />

                <Button onClick={this.handleIncludeLampada}>Adicionar Medicao</Button>
                <CancelButton href={'/lampadas/list'}>Cancelar</CancelButton>
            </Wrapper>
        )
    }
}

export default LampadaInsert
