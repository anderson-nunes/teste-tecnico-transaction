import * as S from "./style"

export const Search = ({ searchValue, onChange }) => {

  return (
    <S.ContainerSearch>
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        placeholder="Buscar transação" />
    </S.ContainerSearch>
  )
}