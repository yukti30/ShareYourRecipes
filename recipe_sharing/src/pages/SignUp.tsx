import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm, type FieldValues } from "react-hook-form";

interface Formdata {
  name: string;
  email: string;
  age: number;
  password: string;
}
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Formdata>();
  function handleDataStorage(data: FieldValues) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleDataStorage(data);
        reset();
      })}
    >
      <FormControl marginY={5} isInvalid={!!errors.name}>
        <FormLabel>Username</FormLabel>
        <Input
          {...register("name", {
            required: { value: true, message: "Username is required." },
          })}
          id="name"
          type="text"
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl marginY={5} isInvalid={!!errors.age}>
        <FormLabel>Age</FormLabel>
        <Input
          {...register("age", {
            min: { value: 18, message: "You must be atleast 18" },
            required: { value: true, message: "Age is required." },
          })}
          id="age"
          type="number"
        />
        <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
      </FormControl>

      <FormControl marginY={5} isInvalid={!!errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          {...register("email", {
            required: { value: true, message: "Email is required." },
          })}
          id="email"
          type="email"
        />

        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>

      <FormControl marginY={5} isInvalid={!!errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password length should be atleast 8",
            },
            required: { value: true, message: "Password is required." },
          })}
          id="password"
          type="password"
        />

        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit" marginY={5}>
        SignUp
      </Button>
    </form>
  );
};

export default SignUp;
