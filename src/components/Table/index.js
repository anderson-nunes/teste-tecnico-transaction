import * as S from "./style"

export const Table = ({ transactions, onClick }) => {

  return (
    <S.ContainerTable>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          return (
            <tr key={index} onClick={() => onClick(transaction)}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.status}</td>
              <td>{transaction.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </S.ContainerTable>
  )

}