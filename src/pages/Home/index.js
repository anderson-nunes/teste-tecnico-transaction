import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { getTransactions } from "../../services/transaction";
import { Search } from '../../components/Search'
import { Modal } from '../../components/Modal'
import { Table } from '../../components/Table'
import * as S from './style'

export const Home = () => {

  const [transactions, setTransactions] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [transaction, setTransaction] = useState(undefined);

  const updateTransactions = async () => {

    const apiResponse = await getTransactions()
    setTransactions(apiResponse)
  }

  useEffect(() => {
    updateTransactions()
  }, [])

  const filterTitle = transactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchTitle)
  );

  const openModal = (transaction) => {
    setTransaction(transaction);
    setShowModal(true);
  };

  const closeModal = () => {
    setTransaction(undefined);
    setShowModal(false);
  };

  return (
    <>
      <Header title={"Warren"} />
      <S.ContaneirHome>
        <Search
          searchValue={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
        <Table transactions={filterTitle} onClick={openModal} />
        <Modal show={showModal} close={closeModal} transaction={transaction} />
      </S.ContaneirHome>
    </>
  )
}