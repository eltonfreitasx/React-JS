import React, { Component } from "react";

class TrabFormulario extends Component{

    constructor(props){
        super(props)
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: '',
            }
        }

        this.dadosForm = this.dadosForm.bind(this)
    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Nome:
                <input type="text" name="nome" value={this.state.form.nome}
                    onChange={this.dadosForm} /> <br />
                Email: 
                <input type='email' name='email' value={this.state.form.email} 
                    onChange={this.dadosForm} /> <br />
                Senha: 
                <input type='password' name='senha' value={this.state.form.senha}
                    onChange={this.dadosForm} /> <br />

                Sexo:
                <select name='sexo' value={this.state.form.sexo} 
                    onChange={this.dadosForm}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>


                <div>
                    <h3>Email: {this.state.form.email}</h3>
                    <h3>Senha: {this.state.form.senha}</h3>
                    <h3>Sexo: {this.state.form.sexo}</h3>
                </div>
            </div>
        )
    }
}

export default TrabFormulario;