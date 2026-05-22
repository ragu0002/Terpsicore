"use client";
import { SmallParagraph } from "../../typography";
import Button from "../../global/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const workshopSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have minimum two letters.")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name."),
  email: z.string().email(),
});

const SingelForm = () => {
  const form = useForm({
    resolver: zodResolver(workshopSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <SmallParagraph color="text-red-600" text={errors.name?.message} />
        <input type="text" id="name" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Navn" {...register("name")}></input>
      </div>
      <div>
        <SmallParagraph color="text-red-600" text={errors.email?.message} />
        <input type="text" id="email" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Email" {...register("email")}></input>
      </div>
      <Button variant="dark" type="submit" disabled={isSubmitting} text={isSubmitting ? "sender..." : "send inn"} />
    </form>
  );
};

export default SingelForm;
