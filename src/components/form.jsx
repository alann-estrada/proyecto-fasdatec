function Form({ label_nombre }) {
  return (
    <>
      {label_nombre && label_nombre.length > 0 ? (
        label_nombre.map((label_nombre, index) => (
          <>
            <label key={index} for="contacto">
              {label_nombre}:
            </label>
            <input
              type="text"
              id={label_nombre[index]}
              name={label_nombre}
            ></input>
          </>
        ))
      ) : (
        <p>No hay formularios disponibles</p>
      )}
    </>
  );
}
export default Form;
