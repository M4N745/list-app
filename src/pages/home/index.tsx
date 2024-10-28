import { FormEvent, useState } from 'react';
import {
  Button,
  Container,
  Form,
  IconButton,
  IconButtonsGroup,
  Input,
  Select, Table, TableBody,
  TableCell, TableHead,
  Title,
} from '@/pages/home/index.style.ts';
import { toast } from 'react-toastify';
import Icon from '@/components/reusable/Icon/Icon.tsx';

type ListItemType = {
  firstName: string;
  lastName: string;
  age: number;
  position: string;
};
const defaultValues = {
  firstName: '',
  lastName: '',
  age: 0,
  position: 'top',
};

export default function Index() {
  const [list, setList] = useState<ListItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<ListItemType>(defaultValues);
  const [action, setAction] = useState<"create" | "edit">("create");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.firstName !== '' && values.lastName !== '' && values.age) {
      if (activeIndex === null) {
        setList((prev) => {
          const old = [...prev];
          const putToTop = values.position === "top";
          old.splice(putToTop ? 0 : prev.length, 0, values);
          return old;
        });
      } else {
        setList((prev) => {
          const old = [...prev];
          old.splice(activeIndex, 1, values);
          return old;
        });
        setActiveIndex(null);
        setValues(defaultValues);
      }
      toast('Friend Added!', { type: 'success' })
    }
    else {
      toast('All fields must be filled!', { type: 'error' });
    }
  };

  const handleSwap = (index: number, type: "up" | "down") => {
    setList((prev) => {
      const old = [...prev];

      if (type === "up" && index > 0) {
        [old[index], old[index - 1]] = [old[index - 1], old[index]];
      } else if (type === "down" && index < old.length - 1) {
        [old[index + 1], old[index]] = [old[index], old[index + 1]];
      }

      return old;
    });
  };

  return (
    <Container>
      <Title>Friends List</Title>
      <Button
        onClick={() => {
          setAction("create");
          if (action === "create") {
            setOpen((prev) => !prev);
          }
        }}
      >
        {action === "edit" ? "Add new" : "Toggle Form"}
      </Button>
      {open && (
        <Form onSubmit={(e) => onSubmit(e)}>
          <Input
            value={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={({ target }) =>
              setValues((prev) => ({ ...prev, firstName: target.value }))
            }
          />
          <Input
            value={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={({ target }) =>
              setValues((prev) => ({ ...prev, lastName: target.value }))
            }
          />
          <Input
            value={values.age}
            type="number"
            placeholder="Age"
            onChange={({ target }) =>
              setValues((prev) => ({ ...prev, age: Number(target.value) }))
            }
          />
          {action === 'create' && (
            <Select
              onChange={({ target }) =>
                setValues((prev) => ({ ...prev, position: target.value }))
              }
            >
              <option value="top">Add at the start of list</option>
              <option value="bottom">Add at the bottom of list</option>
            </Select>
          )}
          <Button type="submit">
            {action === "create" ? "Add" : "Save Changes"}
          </Button>
        </Form>
      )}
      <Table>
        <TableHead>
          <tr>
            {list.length !== 0 && <TableCell $width="200px"/>}
            <TableCell $bold>First Name</TableCell>
            <TableCell $bold>Last Name</TableCell>
            <TableCell $bold>Age</TableCell>
          </tr>
        </TableHead>
        <TableBody>
        {list.length > 0 ? list.map((item, index) => (
          <tr>
            <TableCell>
              <IconButtonsGroup>
                <IconButton
                  onClick={() =>
                    setList((prev) => {
                      const old = [...prev];
                      old.splice(index, 1);
                      return old;
                    })
                  }
                >
                  <Icon name="delete" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setAction("edit");
                    setOpen(true);
                    setValues(item);
                    setActiveIndex(index);
                  }}
                >
                  <Icon name="edit" />
                </IconButton>
                <IconButton onClick={() => handleSwap(index, "up")}><Icon name="arrow_upward" /></IconButton>
                <IconButton onClick={() => handleSwap(index, "down")}><Icon name="arrow_downward" /></IconButton>
              </IconButtonsGroup>
            </TableCell>
            <TableCell>
              {item.firstName}
            </TableCell>
            <TableCell>
              {item.lastName}
            </TableCell>
            <TableCell>
              {item.age}
            </TableCell>
          </tr>
        )) : (<tr><TableCell $center colSpan={3}>No Data</TableCell></tr>)}
        </TableBody>
      </Table>
    </Container>
  );
}
