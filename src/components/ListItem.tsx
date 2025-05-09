import IconButton from './IconButton';
import type { Item } from './Main';

interface ListItemProps {
  item: Item;
  toggleCompleted: (id: string, completed: boolean) => void;
  deleteItem: (id: string) => void;
}

const ListItem = ({
  item: { id, description, isCompleted },
  toggleCompleted,
  deleteItem,
}: ListItemProps) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(event) => toggleCompleted(id, event.target.checked)}
        />
        <span>{description}</span>
      </label>
      <IconButton icon="delete" handleClick={() => deleteItem(id)} />
    </li>
  );
};

export default ListItem;
