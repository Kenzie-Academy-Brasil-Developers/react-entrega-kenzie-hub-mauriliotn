import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [techsList, setTechsList] = useState([]);
  const [editingTech, setEditingTech] = useState(null);

  const [createIsOpen, setCreateIsOpen] = useState(null);
  const [editIsOpen, seteditIsOpen] = useState(null);

  const openCreateModal = () => {
    setCreateIsOpen(true);
  };
  const openEditModal = () => {
    seteditIsOpen(true);
  };

  const closeModal = () => {
    setCreateIsOpen(null);
    seteditIsOpen(null);
  };

  useEffect(() => {
    setTechsList(user.techs);
  }, []);

  const createTech = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnoligia adicionada com sucesso");
      closeModal();
      setTechsList([...techsList, data]);
    } catch (error) {
      console.log(error);
      toast.error(
        <p>
          Você ja criou uma tecnologia com
          <strong className="toastStr"> "{formData.title}" </strong>, tente
          outra tecnologia
        </p>
      );
    }
  };

  const editTech = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techsList.map((techs) => {
        if (techs.id === editingTech.id) {
          return data;
        } else {
          return techs;
        }
      });
      toast.success("Tecnoligia autualizada com sucesso");
      closeModal();
      setTechsList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (deletingId) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techsList.filter((techs) => techs.id !== deletingId);

      setTechsList(newTechList);
      toast.success("Tecnologia excluída com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createIsOpen,
        editIsOpen,
        techsList,
        editingTech,
        setEditingTech,
        openCreateModal,
        openEditModal,
        closeModal,
        createTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
