/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function LoginCard({ email, setEmail, password, setPassword, onSubmit }) {
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth type="submit">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="ml-1 font-bold text-blue-gray-500">
              Sign up
            </Link>
          </Typography>
        </CardFooter>
      </form>
    </Card>
  );
}