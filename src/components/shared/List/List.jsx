import classes from "./List.module.scss";
const List = ({ items, Component }) => {
  return (
    <div className={classes.list}>
      {items.map((item) => (
        <Component key={item.url} item={item} />
      ))}
    </div>
  );
};

export default List;
