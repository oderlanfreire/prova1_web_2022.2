//implementar materias do semestre
export default (props) =>{
    const disciplinas = ["Dev.Web", "Probabilidade e Estatistica", "Sistema Operacional"]
    return <ul>
        {disciplinas.map(disciplina => <li>{disciplina}</li>)}
    </ul>
}