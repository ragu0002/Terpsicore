export default function Workshop({ blok }) {
  return (
    <section>
      <h1>{blok.name}</h1>
      <p>{blok.introduction}</p>
      <p>{blok.price} kr</p>

      <img src={blok.main_image.filename} alt={blok.main_image.alt || "image"} style={{ maxWidth: "100%" }} />
    </section>
  );
}
