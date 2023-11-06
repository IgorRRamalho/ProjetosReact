import React, { Component } from "react";
import "./App.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      cpf: "",
      DataNasc: "",
      sexo: "",
      EstadoCivil: "Casado",
      login: "",
      senha: "",
      email: "",
      website: "",
      endereco: "",
      cidade: "",
      bairro: "",
      estados: "AC",
      cep: "",
      telefone: "",
      celular: "",
      categorias: [],
      regras: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedCategorias = [...this.state.categorias];
      if (checked) {
        updatedCategorias.push(value);
      } else {
        const index = updatedCategorias.indexOf(value);
        if (index !== -1) {
          updatedCategorias.splice(index, 1);
        }
      }

      this.setState({
        [name]: updatedCategorias,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>FORMULÁRIO</h1>
        <form autoComplete="off" method="get" action="cadastro_resultado.html">
          <fieldset id="infos">
            <p>
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={this.state.nome}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="cpf">CPF</label>
              <input
                type="number"
                id="cpf"
                name="cpf"
                value={this.state.cpf}
                onChange={this.handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="DataNasc">Data Nascimento</label>
              <input
                type="date"
                id="DataNasc"
                name="DataNasc"
                value={this.state.DataNasc}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="sexo">Sexo</label>
              <input
                type="radio"
                name="sexo"
                id="sexoM"
                value="M"
                onChange={this.handleChange}
                checked={this.state.sexo === "M"}
              />
              M
              <input
                type="radio"
                name="sexo"
                id="sexoF"
                value="F"
                onChange={this.handleChange}
                checked={this.state.sexo === "F"}
              />
              F
            </p>

            <p>
              <label htmlFor="EstCi">Est. Civil</label>
              <select
                name="EstadoCivil"
                id="EstCi"
                value={this.state.EstadoCivil}
                onChange={this.handleChange}
              >
                <option value="Casado">Casado</option>
                <option value="Solteiro">Solteiro</option>
                <option value="Viúvo">Viúvo</option>
                <option value="Divorciado">Divorciado</option>
              </select>
            </p>

            <p>
              <label htmlFor="login">Login</label>
              <input
                type="text"
                id="login"
                name="login"
                value={this.state.login}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={this.state.senha}
                onChange={this.handleChange}
                required
              />
            </p>
          </fieldset>

          <fieldset id="contato">
            <p>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="website">Web Site</label>
              <input
                type="text"
                id="website"
                name="website"
                value={this.state.website}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label htmlFor="Endereco">Endereço</label>
              <input
                type="text"
                id="Endereco"
                name="endereco"
                value={this.state.endereco}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={this.state.cidade}
                onChange={this.handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={this.state.bairro}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="UF">UF</label>
              <select
                name="estados"
                id="UF"
                value={this.state.estados}
                onChange={this.handleChange}
                required
              >
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="TO">Tocantins (TO)</option>
              </select>
            </p>
            <p>
              <label htmlFor="cep">CEP</label>
              <input
                type="number"
                id="cep"
                name="cep"
                value={this.state.cep}
                onChange={this.handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={this.state.telefone}
                onChange={this.handleChange}
                placeholder="(12) 1234-5678"
                maxLength="13"
              />

              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={this.state.celular}
                onChange={this.handleChange}
                maxLength="13"
                placeholder="(12) 1234-5678"
                required
              />
            </p>
          </fieldset>

          <fieldset id="assuntos">
            <h3>
              Deseja receber informações sobre os seguintes assuntos abaixo:
            </h3>

            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Tecnologia"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Tecnologia")}
              />
              Tecnologia
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Esportes"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Esportes")}
              />
              Esportes
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Automóveis"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Automóveis")}
              />
              Automóveis
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Culinária"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Culinária")}
              />
              Culinária
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Política"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Política")}
              />
              Política
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Policial"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Policial")}
              />
              Policial
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Tempo"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Tempo")}
              />
              Tempo
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Cultura"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Cultura")}
              />
              Cultura
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Economia"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Economia")}
              />
              Economia
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Jogos"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Jogos")}
              />
              Jogos
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Educação"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Educação")}
              />
              Educação
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Viagem"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Viagem")}
              />
              Viagem
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Empregos"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Empregos")}
              />
              Empregos
            </label>
            <label>
              <input
                type="checkbox"
                name="categorias"
                value="Moda e Estilo"
                onChange={this.handleChange}
                checked={this.state.categorias.includes("Moda e Estilo")}
              />
              Moda e Estilo
            </label>
          </fieldset>

          <div id="final">
            <p>
              <label htmlFor="Regras">
                Li as regras de cadastro e autorizo a criação do usuário{" "}
                <input
                  type="checkbox"
                  name="regras"
                  id="Regras"
                  onChange={this.handleChange}
                  checked={this.state.regras}
                />
              </label>
            </p>

            <input type="submit" value="Confirmar" id="Confirmar" />
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
