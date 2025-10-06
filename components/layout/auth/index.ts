import FormHeaderDescription from "./FormHeaderDescription";
import FormHeaderTitle from "./FormHeaderTitle";
import FormHeader from "./FormHeader";
import FormItem from "./FormItem";
import Layout from "./Layout";
import Form from "./Form";

const AuthLayout = Object.assign(Layout, {
  Header: FormHeader,
  HeaderTitle: FormHeaderTitle,
  HeaderDescription: FormHeaderDescription,

  Form: Form,
  FormItem: FormItem,
});
export default AuthLayout;
