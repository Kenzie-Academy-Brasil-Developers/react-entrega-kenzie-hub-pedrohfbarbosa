const { createContext, useState } = require("react");

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isModalCreate, setIsModalCreate] = useState(null);
  const [isModalEdit, setIsModalEdit] = useState(null);
  const [isModalDelete, setIsModalDelete] = useState(null);

  return (
    <TechContext.Provider
      value={{
        isModalCreate,
        setIsModalCreate,
        isModalEdit,
        setIsModalEdit,
        isModalDelete,
        setIsModalDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
