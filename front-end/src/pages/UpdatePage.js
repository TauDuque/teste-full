import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useHistory } from "react-router";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useGlobalContext } from "../context";
import moment from "moment";
import { Loading } from "../components";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 390,
  },
  planeField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 180,
    borderRadius: "5px",
  },
  icon: {
    borderRadius: "50%",
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    width: 16,
    height: 16,
  },
  checkedIcon: {
    backgroundColor: "var(--strong-yellow)",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
    },
  },
  switch: {
    color: "#000",
  },
}));

const UpdatePage = () => {
  const classes = useStyles();
  const { api, showExtra, funcionario, is_loading } = useGlobalContext();
  const history = useHistory();

  const {
    id,
    nome,
    email,
    data_nascimento,
    data_admissao,
    setor,
    cargo,
    nivel,
  } = funcionario;

  const [name, setName] = useState("");
  const [workerEmail, setWorkerEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [hiring, setHiring] = useState("");
  const [sector, setSector] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");

  function fieldFiller() {
    setName(nome);
    setWorkerEmail(email);
    setBirth(data_nascimento);
    setHiring(data_admissao);
    setSector(setor);
    setPosition(cargo);
    setLevel(nivel);
  }

  const now = moment().format("MM/DD/YYYY HH:mm", "pt");

  const handleRadioSector = (e) => {
    setSector(e.target.value);
  };

  const handleRadioPosition = (e) => {
    setPosition(e.target.value);
  };

  const handleRadioLevel = (e) => {
    setLevel(e.target.value);
  };

  function StyledRadio(props) {
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  async function updateHandler(e) {
    e.preventDefault();
    const data = {
      id: id,
      nome: name,
      email: email,
      data_nascimento: birth,
      data_admissao: hiring,
      setor: sector,
      cargo: position,
      nivel: level,
      audit_data_update: now,
    };
    const newData = await api.put("funcionarios", data);
    history.push("/starter");
  }

  useEffect(() => {
    showExtra();
    fieldFiller();
  }, [is_loading]);

  if (is_loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="center-att">
      <form className="form-container" onSubmit={updateHandler}>
        <div>
          <h3>Cadastrar Novo Funcionário</h3>
        </div>

        <div>
          <TextField
            required
            className={classes.textField}
            label="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
          ></TextField>
        </div>
        <div>
          <TextField
            required
            label="e-mail"
            className={classes.textField}
            type="email"
            value={workerEmail}
            variant="filled"
            onChange={(e) => setWorkerEmail(e.target.value)}
          ></TextField>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <TextField
              required
              className={classes.planeField}
              type="date"
              label="Data de Nascimento"
              InputLabelProps={{
                shrink: true,
              }}
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </Box>

          <div>
            <TextField
              required
              className={classes.planeField}
              type="date"
              label="Data de Admissão"
              InputLabelProps={{
                shrink: true,
              }}
              value={hiring}
              onChange={(e) => setHiring(e.target.value)}
            />
          </div>
        </div>
        <div
          className="radio-div"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              required
              className={classes.formGroup}
              name="setor"
              row
              value={sector}
              onChange={handleRadioSector}
            >
              <FormControlLabel
                className={setor == "Engenharia" ? "current-answer" : null}
                value="Engenharia"
                control={<StyledRadio />}
                label="Engenharia"
              />
              <FormControlLabel
                className={setor == "Compras" ? "current-answer" : null}
                value="Compras"
                control={<StyledRadio />}
                label="Compras"
              />
              <FormControlLabel
                className={setor == "Vendas" ? "current-answer" : null}
                value="Vendas"
                control={<StyledRadio />}
                label="Vendas"
              />
              <FormControlLabel
                value="Financeiro"
                className={setor == "Financeiro" ? "current-answer" : null}
                control={<StyledRadio />}
                label="Financeiro"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          className="radio-div"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              required
              className={classes.formGroup}
              name="cargo"
              row
              value={position}
              onChange={handleRadioPosition}
            >
              <FormControlLabel
                className={position == "Auxiliar" ? "current-answer" : null}
                value="Auxiliar"
                control={<StyledRadio />}
                label="Auxiliar"
              />
              <FormControlLabel
                className={position == "Técnico" ? "current-answer" : null}
                value="Técnico"
                control={<StyledRadio />}
                label="Técnico"
              />
              <FormControlLabel
                className={position == "Engenheiro" ? "current-answer" : null}
                value="Engenheiro"
                control={<StyledRadio />}
                label="Engenheiro"
              />
              <FormControlLabel
                className={position == "Diretor" ? "current-answer" : null}
                value="Diretor"
                control={<StyledRadio />}
                label="Diretor"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          className="radio-div"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              required
              className={classes.formGroup}
              name="nivel"
              row
              value={level}
              onChange={handleRadioLevel}
            >
              <FormControlLabel
                className={nivel == "Junior" ? "current-answer" : null}
                value="Junior"
                control={<StyledRadio />}
                label="Junior"
              />
              <FormControlLabel
                value="Pleno"
                className={nivel == "Pleno" ? "current-answer" : null}
                control={<StyledRadio />}
                label="Pleno"
              />
              <FormControlLabel
                className={nivel == "Senior" ? "current-answer" : null}
                value="Senior"
                control={<StyledRadio />}
                label="Senior"
              />
              <FormControlLabel
                value="Estagiário"
                className={nivel == "Estagiário" ? "current-answer" : null}
                control={<StyledRadio />}
                label="Estagiário"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <button
            type="submit"
            className="primary-btn primary-btn-2 grow form-btn"
          >
            Atualizar
          </button>
        </div>
      </form>
      ;
    </Wrapper>
  );
};

const Wrapper = styled.section`
  div {
    margin-top: 8px;
  }
  .radio-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 2px solid var(--clr-grey-2); 
    padding: 3px;
    width: 455px;
    border-radius: 6px;
  }
  h3 {
    font-family: var(--secondary-font);
  }

  @media (min-width: 992px) {
    margin-top: 8px;
  }
  h3 {
    margin-top: 15px;
  }
  .form-btn {
    margin-top: 5px;
    width: 200px;
    height: 45px;
    box-shadow: 0 6px 15px rgba(255, 166, 61, 0.39),
    0 8px 12px rgba(255, 61, 119, 0.34),
    6px 5px 10px rgba(51, 138, 255, 0.45);
    font-size: 20px;
}
.current-answer {
    color: var(--green-dark);
}
  }
`;

export default UpdatePage;
