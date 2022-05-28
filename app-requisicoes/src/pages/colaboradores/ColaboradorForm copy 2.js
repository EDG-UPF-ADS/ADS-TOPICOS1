import { React, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';

const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setColaborador({ ...props.colaborador, [id]: value });
  };

  const [contraSenha, setContraSenha] = useState();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    props.salvar();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <h5>Cadastro de Colaboradores</h5>
        <div className="p-fluid grid formgrid">
          <div className="field col-12 md:col-4">
            <label htmlFor="nome">Nome</label>
            <InputText id="nome" defaultValue={props.colaborador.nome}
              {...register("nome", {
                required: { value: true, message: "Nome Obrigatório" },
                minLenght: { value: 2, message: "Nome deve ter no mínimo 2 caracteres" },
                maxLenght: { value: 50, message: "Nome deve ter no máximo 50 caracteres" }
              })}
              onChange={handleInputChange} />
            {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message}</span>}
          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="email">Email</label>
            <InputText id="email" defaultValue={props.colaborador.email}
              onChange={handleInputChange} />
            <div className="field col-12 md:col-4">
              <label htmlFor="senha">Senha</label>
              <Password id="senha" defaultValue={props.colaborador.senha}
                onChange={handleInputChange} toggleMask />
            </div>
          </div>
        </div>

        <div>
          <Button label="Salvar" icon="pi pi-save" type="submit"
            className="p-button-raised p-button-secondary" />
          <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar}
            className="p-button-raised p-button-secondary" />
        </div>

      </div>

    </form>
  );
};
export default ColaboradorForm;