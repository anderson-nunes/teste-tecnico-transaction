import * as S from "./style"

export const Modal = ({ show, close, transaction }) => {

  if (!show) return null

  return (
    <S.OverlayModal>
      <S.ContainerModal>
        <S.HeaderModal>
          <h2>Depósito</h2>
          <button onClick={close}>x</button>
        </S.HeaderModal>
        <S.Description>
          <span>{transaction.description}</span>
        </S.Description>
      </S.ContainerModal>
    </S.OverlayModal>
  )
}