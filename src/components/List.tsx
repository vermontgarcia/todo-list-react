import ListItem from './ListItem';
import type { Item } from './Main';

interface ListProps {
  list: Item[];
  toggleCompleted: (id: string, completed: boolean) => void;
  deleteItem: (id: string) => void;
}

const List = ({ list, toggleCompleted, deleteItem }: ListProps) => {
  return (
    <ul>
      {list.map((item: Item) => (
        <ListItem
          key={item.id}
          item={item}
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default List;
