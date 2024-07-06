import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { update as updateRedux } from "../redux/email-slice";
import { useAppSelector } from "./hooks";

export const useEmailForm = () => {
  const dispatch = useDispatch();
  const email = useAppSelector((state: RootState) => state.email);

  const update = (email: string) => {
    dispatch(updateRedux(email));
  };

  return {
    email,
    update,
  };
};
