import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input,textarea{
            border: 1px solid gray;
          }
          

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: green;

            &:hover {
              background-color: blue;
              border: 1px solid blue;
              color: black;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h1 className="common-heading">Contact Us</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.812149983142!2d91.8787893803746!3d25.577915758097763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f9d865f9279%3A0x323d6fa8598697b1!2sShillong!5e0!3m2!1sen!2sin!4v1691322924824!5m2!1sen!2sin" width="100%" height="450" style= {{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/mnqkjenj "
          method="POST"
          className="contact-inputs">
          <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

          <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;