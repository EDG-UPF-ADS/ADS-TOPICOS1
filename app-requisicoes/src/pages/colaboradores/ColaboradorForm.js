import React , {useState} from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setColaborador({ ...props.colaborador, [id]: value });
  };
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    
    props.salvar();
  }
  const [contraSenha, setContraSenha] = useState();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card">
        <h5>Formulario colaborador</h5>
        <div className="p-fluid grid formgrid">
          <div className="field col-12 md:col-4">
            <label htmlFor="nome">nome</label>
            <InputText id="nome" defaultValue={props.colaborador.nome}
              {...register("nome", {
               required: {value:true, message:"o nome é obrigatorios" },
               minLength: {value:2, message:"o nome deve conter no minimo 2 caracteres" },
               maxLength: {value:50, message:"o nome deve conter no maximo 50 caracteres" } })}
              onChange={handleInputChange} />
              {errors.nome && <span style={{color:'red'}}>{errors.nome.message}</span>}

          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="email">email</label>
            <InputText id="email" defaultValue={props.colaborador.email}
              onChange={handleInputChange} />
          </div>
          <div className="field col-4 md:col-4">
            <label htmlFor="senha">senha</label>
            <Password id="senha" defaultValue={props.colaborador.senha}
            {...register("senha", {
              required: {value:true, message:"Senha Obrigatória" },
              minLength: {value:6, message:"Senha deve conter no mínimo 6 caracteres" },
              maxLength: {value:10, message:"Senha deve conter no máximo 10 caracteres" } })}
              onChange={handleInputChange} toggleMask />
              {errors.nome && <span style={{color:'red'}}>{errors.nome.message}</span>}
          </div>
          <div className="field col-4 md:col-4">
            <label htmlFor="contraSenha">senha</label>
            <Password id="contraSenha" defaultValue={props.colaborador.senha}
              onChange={e => contraSenha = e.target.value} toggleMask />
            </div>
          </div>
        <div>
          <Button label="Salvar" icon="pi pi-pencil" type="submit" className="p-button-success p-button-text"  />
          <Button label="Cancelar" icon="pi pi-times" className="p-button-danger p-button-text" onClick={props.cancelar} />
        </div>
      </div>
    </form>
  );
};
export default ColaboradorForm;