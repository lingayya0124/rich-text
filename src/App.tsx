import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Demo from "./Components/Demo";
import {
  AppShell,
  Button,
  Card,
  Checkbox,
  Flex,
  Group,
  MantineProvider,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import HTMLReactParser from "html-react-parser";

function App() {
  const [task, setTask] = useState("");
  const [value, setValue] = useState<string[]>([]);
  const [addedTask, setAddedTask] = useState<string[]>([]);
  const handleAddTask = () => {
    setAddedTask([...addedTask, task]);
    setTask("");
  };
  return (
    <MantineProvider>
      <AppShell
        padding="md"
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {/* Your application here */}

        <Flex justify="center" align="center">
          <Demo task={task} setTask={setTask} />
        </Flex>
        <Group mt={15} position="center">
          <Button onClick={() => handleAddTask()} size="lg" color={"teal"}>
            Add
          </Button>
        </Group>

        <Checkbox.Group
          mt={20}
          value={value}
          onChange={setValue}
          orientation="vertical"
        >
          <SimpleGrid cols={3}>
            {addedTask.map((e, key) => {
              return (
                <Card key={key} shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section>
                    <Group noWrap spacing={50}>
                      <Checkbox
                        mt={10}
                        ml={15}
                        value={e}
                        // label={HTMLReactParser(value)}
                      ></Checkbox>{" "}
                      <Title>Your Note {key + 1}</Title>
                    </Group>
                  </Card.Section>
                  {/* <Paper w={"100%"} h={"500"} shadow="lg" withBorder> */}
                  <Flex
                    color="red"
                    gap={"lg"}
                    align={"center"}
                    justify={"flex-start"}
                  >
                    {" "}
                    <Text td={value.includes(e) ? "line-through" : "none"}>
                      {" "}
                      {HTMLReactParser(e)}
                    </Text>
                  </Flex>
                  {/* </Paper> */}
                </Card>
              );
            })}
          </SimpleGrid>
        </Checkbox.Group>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
