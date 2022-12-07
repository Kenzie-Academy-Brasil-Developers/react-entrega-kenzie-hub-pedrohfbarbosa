import { useContext } from "react";
import { toast } from "react-toastify";
import { instance } from "../../services/api/api";
import { UserContext } from "../UserContext";
import { toastStyle } from "../../styles/toast";

const { createContext, useState } = require("react");

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
    const token = localStorage.getItem("@TOKEN");
    setIsLoadingCreate(true);

    try {
      await instance.post("/users/techs", data, {
        headers: { authorization: `Bearer ${token}` },
      });

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
    const token = localStorage.getItem("@TOKEN");
    setIsLoadingEdit(true);

    try {
      await instance.put(`/users/techs/${editTech.id}`, data, {
        headers: { authorization: `Bearer ${token}` },
      });

      await getUser();

      toast.success("Tecnologia editada com sucesso", toastStyle);
      setEditTech(null);
    } catch (err) {
      toast.error(err.response.data.message, toastStyle);
    } finally {
      setIsLoadingEdit(false);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("@TOKEN");
    setIsLoadingDelete(true);

    try {
      await instance.delete(`/users/techs/${deleteTech.id}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      await getUser();

      toast.warn("Tecnologia removida com sucesso", toastStyle);
      setDeleteTech(null);
    } catch (err) {
      toast.error(err.response.data.message, toastStyle);
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
