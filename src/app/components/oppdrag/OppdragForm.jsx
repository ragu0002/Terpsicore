"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FooterText, SmallParagraph } from "../typography";
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
  date: z.coerce.number().min(1),
  telefon: z.coerce.number().min(1),
  comment: z.string(),
});
const OppdragForm = () => {
  const form = useForm({
    resolver: zodResolver(oppdragSchema),
    defaultValues: {
      fornavn: "",
      etternavn: "",
      bedrift: "",
      date: "",
      email: "",
      telefon: "",
      comment: "",
    },
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;
  const onSubmit = async (data) => {
    const response = await fetch("/api/oppdrag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      reset();
    }
  };
  return (
    <div>
      <form className={`grid md:grid-cols-2 gap-2 `} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={`${Object.values(errors).length ? "min-h-6" : ""}`}>
            <FooterText color="text-red-600" text={errors.fornavn?.message} />
          </div>
          <input type="text" id="fornavn" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Fornavn" {...register("fornavn")}></input>
        </div>
        <div>
          <div className={`${Object.values(errors).length ? "min-h-6" : ""}`}>
            <FooterText color="text-red-600" text={errors.etternavn?.message} />
          </div>
          <input type="text" id="etternavn" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Etternavn" {...register("etternavn")}></input>
        </div>
        <div>
          <div className={`${Object.values(errors).length ? "min-h-6" : ""}`}>
            <FooterText color="text-red-600" text={errors.bedrift?.message} />
          </div>
          <input type="text" id="bedrift" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Bedrift" {...register("bedrift")}></input>
        </div>
        <div>
          <div className={`${Object.values(errors).length ? "min-h-6" : ""}`}>
            <FooterText color="text-red-600" text={errors.date?.message} />
          </div>
          <input type="number" id="date" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Dato for booking" {...register("date")}></input>
        </div>
        <div>
          <div className={`${Object.values(errors).length ? "min-h-6" : ""}`}>
            <FooterText color="text-red-600" text={errors.email?.message} />
          </div>
          <input type="text" id="email" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Email" {...register("email")}></input>
        </div>
        <div>
          <div className={`${Object.values(errors).length ? "min-h-6" : ""}`}>
            <FooterText color="text-red-600" text={errors.telefon?.message} />
          </div>
          <input type="number" id="telefon" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Telefon" {...register("telefon")}></input>
        </div>
        <div className="md:col-span-2">
          <FooterText color="text-red-600" text={errors.comment?.message} />

          <textarea className="border rounded-xl px-5 py-2 h-80 p-2 w-full focus:outline-accent placeholder:text-foreground" id="comment" placeholder="Skriv litt om hva du vil booke oss til.." {...register("comment")} />
        </div>
        <Button variant="dark" type="submit" disabled={isSubmitting} text={isSubmitting ? "sender..." : "send inn"} />
      </form>
    </div>
  );
};

export default OppdragForm;
