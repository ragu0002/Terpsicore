import OppdragForm from "@/app/components/oppdrag/OppdragForm";

export default function Oppdrag() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <div className="col-(--content-col)">
          <OppdragForm />
        </div>
      </main>
    </>
  );
}
