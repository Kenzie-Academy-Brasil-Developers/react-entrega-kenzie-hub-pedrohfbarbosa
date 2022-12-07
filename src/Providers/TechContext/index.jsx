import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
import { instance } from "../../services/api/api";
import { UserContext } from "../UserContext";
import { toastStyle } from "../../styles/toast";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { getUser } = useContext(UserContext);

  const [isModalCreate, setIsModalCreate] = useState(null);
  const [editTech, setEditTech] = useState(null);
  const [deleteTech, setDeleteTech] = useState(null);

  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleCreate = async (data) => {
    setIsLoadingCreate(true);

    try {
      await instance.post("/users/techs", data);

      await getUser();

      toast.success("Tecnologia criada com sucesso", toastStyle);

      setIsModalCreate(null);
    } catch (err) {
      toast.error(err.response.data.message, toastStyle);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  const handleEdit = async (data) => {
    setIsLoadingEdit(true);

    try {
      await instance.put(`/users/techs/${editTech.id}`, data);

      await getUser();

      toast.success("Tecnologia editada com sucesso", toastStyle);

      setEditTech(null);
    } catch (err) {
      toast.error("Opa! Algo deu errado", toastStyle);
    } finally {
      setIsLoadingEdit(false);
    }
  };

  const handleDelete = async () => {
    setIsLoadingDelete(true);

    try {
      await instance.delete(`/users/techs/${deleteTech.id}`);

      await getUser();

      toast.warn("Tecnologia removida com sucesso", toastStyle);

      setDeleteTech(null);
    } catch (err) {
      toast.error("Opa! Algo deu errado", toastStyle);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        isModalCreate,
        setIsModalCreate,
        editTech,
        setEditTech,
        deleteTech,
        setDeleteTech,
        handleCreate,
        handleEdit,
        handleDelete,
        isLoadingCreate,
        isLoadingEdit,
        isLoadingDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
