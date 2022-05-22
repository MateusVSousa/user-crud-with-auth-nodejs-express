import jwt from "jsonwebtoken";

const decodedService = (token) => {
  const decoded = jwt.verify(token, "SECRET_KEY");
  const isAdmin = decoded.isAdmin;
  const id = decoded.id;
  console.log(isAdmin, id);
  return { isAdmin: isAdmin, id: id };
};
export default decodedService;
