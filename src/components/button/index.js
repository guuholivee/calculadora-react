
import { ButtonContainer } from './styles';

const Button = ({ label, onClick }) => {  // Desestruturando as props
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
}

export default Button;
