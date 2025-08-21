import { useForm } from "react-hook-form";
import z from "zod";

const Q = () => {

    const schema = z.object({
        phone : z.string().min(5).max(9),
        city : z.string().min(2)
    })

    const {} = useForm({
        
    })


  return (
    <h2>Hello</h2>
  );
};

export default Q;