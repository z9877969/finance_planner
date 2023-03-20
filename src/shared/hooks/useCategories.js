import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/categories/categoriesOperations";
import { useAuth } from "shared/hooks/useAuth";

const useCategories = () => {
  const dispatch = useDispatch();
  const { isUserExist } = useAuth();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    isUserExist && dispatch(getCategories());
  }, [dispatch, isUserExist]);

  return categories;
};

export default useCategories;
