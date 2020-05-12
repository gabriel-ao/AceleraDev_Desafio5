import React from "react";
import "../../App.scss";

class Contact extends React.Component {
  render() {
    const { data: contato } = this.props;
    const date = new Date(contato.admissionDate);

    const formattedDate = `${
      date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
    }/${
      date.getMonth() > 8 ? date.getMonth(0) + 1 : "0" + (date.getMonth() + 1)
    }/${date.getFullYear()}`;

    return (
      <div className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img
            src={contato.avatar || "https://picsum.photos/200"}
            alt={contato.name}
          />
        </span>

        <span className="contact__data">{contato.name}</span>

        <span className="contact__data">{contato.phone}</span>

        <span className="contact__data">{contato.country}</span>

        <span className="contact__data">{formattedDate}</span>

        <span className="contact__data">{contato.company}</span>

        <span className="contact__data">{contato.department}</span>
      </div>
    );
  }
}

export default Contact;
