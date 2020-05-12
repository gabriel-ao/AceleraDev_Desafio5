import React from "react";
import "../../App.scss";
import Contato from "../Contact";

class Contacts extends React.Component {
  render() {
    const { contatos } = this.props;
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact-header">
            <span className="contact-header__avatar" />
            <span className="contact-header__data">Nome</span>
            <span className="contact-header__data">Telefone</span>
            <span className="contact-header__data">País</span>
            <span className="contact-header__data">Admissão</span>
            <span className="contact-header__data">Empresa</span>
            <span className="contact-header__data">Departamento</span>
          </article>
          {contatos?.map((contato) => (
            <Contato key={contato.id} data={contato} />
          ))}
        </section>
      </div>
    );
  }
}

export default Contacts;
