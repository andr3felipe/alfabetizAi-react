import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import * as S from "./styles";

export const Classroom = () => {
  const navigate = useNavigate();
  localStorage.removeItem("admin");

  return (
    <S.Container>
      <h1>Sala de aula</h1>
      <div>
        <Button
          backgroundcolor="red-dark"
          onClick={() => {
            localStorage.removeItem("aluno");
            navigate("/");
          }}
        >
          Sair
        </Button>
      </div>
    </S.Container>
  );
};
