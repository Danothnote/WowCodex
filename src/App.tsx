import { SelectionComponent } from "./components/SelectionComponent";
import { selectionStrings } from "./strings/selectionStrings";
import { styleClasses } from "./strings/styleClasses";

export const App = () => {
  const selections = Object.values(selectionStrings).map((value, index) => {
    return (
      <SelectionComponent
        key={index}
        title={value.title}
        src={value.src}
        alt={value.alt}
      />
    );
  });
  return (
    <div>
      <div className={styleClasses.navbar}>
        <h1 className={styleClasses.title}>Wow Codex</h1>
      </div>
      <div className={styleClasses.container}>
        <h1 className={styleClasses.containerSelectionTitle}>Escoge tu destino</h1>
        <div className={styleClasses.selections}>{selections}</div>
      </div>
    </div>
  );
};
