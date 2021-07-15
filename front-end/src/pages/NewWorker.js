import React, { useEffect, useContext, useState } from "react";
import {
  TextField,
  Box,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useGlobalContext } from "../context";
import moment from "moment";

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

const NewWorker = () => {
  const classes = useStyles();
  const { api, showExtra } = useGlobalContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [hiring, setHiring] = useState("");
  const [sector, setSector] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");

  console.log(name, email, hiring, birth, sector, position, level);
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

  async function submitHandler() {
    const data = {
      nome: name,
      email: email,
      data_nascimento: birth,
      data_admissao: hiring,
      setor: sector,
      cargo: position,
      nivel: level,
      audit_data_insert: now,
    };
    const newData = await api.post("funcionarios", data);
    console.log(newData);
  }

  useEffect(() => {
    showExtra();
  }, []);

  return (
    <Wrapper className="center-att">
      <form className="form-container" onSubmit={submitHandler}>
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
            value={email}
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
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
                value="Engenharia"
                control={<StyledRadio />}
                label="Engenharia"
              />
              <FormControlLabel
                value="Compras"
                control={<StyledRadio />}
                label="Compras"
              />
              <FormControlLabel
                value="Vendas"
                control={<StyledRadio />}
                label="Vendas"
              />
              <FormControlLabel
                value="Financeiro"
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
                value="Auxiliar"
                control={<StyledRadio />}
                label="Auxiliar"
              />
              <FormControlLabel
                value="Técnico"
                control={<StyledRadio />}
                label="Técnico"
              />
              <FormControlLabel
                value="Engenheiro"
                control={<StyledRadio />}
                label="Engenheiro"
              />
              <FormControlLabel
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
                value="Junior"
                control={<StyledRadio />}
                label="Junior"
              />
              <FormControlLabel
                value="Pleno"
                control={<StyledRadio />}
                label="Pleno"
              />
              <FormControlLabel
                value="Senior"
                control={<StyledRadio />}
                label="Senior"
              />
              <FormControlLabel
                value="Estagiário"
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
            Cadastrar
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
  }
`;

export default NewWorker;
