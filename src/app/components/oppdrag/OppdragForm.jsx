"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SmallParagraph } from "../typography";
import Button from "../global/Button";
const oppdragSchema = z.object({
  fornavn: z
    .string()
    .min(2, "Name must have minimum two letters.")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name."),
  etternavn: z
    .string()
    .min(2, "Name must have minimum two letters.")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name."),
  bedrift: z
    .string()
    .min(2, "Name must have minimum two letters.")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name."),
  email: z.string().email(),
  date: z.date().transform((d) => d.toISOString()),
  telefon: z.coerce.number(),
  comment: z.string(),
});
const OppdragForm = () => {
  const form = useForm({
    resolver: zodResolver(oppdragSchema),
    defaultValues: { date: undefined },
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState, setValue, watch, reset, setError } = form;
  const { errors, isSubmitting } = formState;
  const onSubmit = (data) => {
    console.log("VALID FORM DATA:", data);
  };
  return (
    <div>
      <form className="grid gap-2 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <SmallParagraph text={errors.fornavn?.message} />
          <input type="text" id="fornavn" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Fornavn" {...register("fornavn")}></input>
        </div>
        <div>
          <SmallParagraph text={errors.etternavn?.message} />
          <input type="text" id="etternavn" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Etternavn" {...register("etternavn")}></input>
        </div>
        <div>
          <SmallParagraph text={errors.bedrift?.message} />
          <input type="text" id="bedrift" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Bedrift" {...register("bedrift")}></input>
        </div>
        <div>
          <SmallParagraph text={errors.dato?.message} />
          <input type="text" id="date" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Dato for booking" {...register("date")}></input>
        </div>
        <div>
          <SmallParagraph text={errors.email?.message} />
          <input type="text" id="email" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Email" {...register("email")}></input>
        </div>
        <div>
          <SmallParagraph text={errors.telefon?.message} />
          <input type="text" id="telefon" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Telefon" {...register("telefon")}></input>
        </div>
        <div className="md:col-span-2">
          <SmallParagraph text={errors.comment?.message} />
          <textarea className="border rounded-xl px-5 py-2 h-80 p-2 w-full focus:outline-accent placeholder:text-foreground" id="comment" placeholder="Skriv litt om hva du vil booke oss til.." {...register("comment")} />
        </div>
        <Button type="submit" disabled={isSubmitting} text={isSubmitting ? "sender..." : "send inn"} />
      </form>
    </div>
  );
};

export default OppdragForm;
