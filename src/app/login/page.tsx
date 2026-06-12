"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { login } from "@/actions/auth/login";

import { loginSchema, LoginFormData } from "@/schemas/login.schema";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Container,
  DemoCredentials,
  Form,
  Header,
  HeroContent,
  HeroSection,
  LoginCard,
  LoginSection,
} from "./login.styles";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await login(data);

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success("Login realizado com sucesso");

    router.replace("/dashboard");
    router.refresh();
  };

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <h1>Financial Dashboard</h1>

          <p>
            Analyze balances, revenue, expenses and transaction history through
            interactive dashboards.
          </p>
        </HeroContent>
      </HeroSection>

      <LoginSection>
        <LoginCard>
          <Card>
            <Header>
              <h2>Sign In</h2>

              <p>Access your financial dashboard</p>
            </Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Field
                label="Email"
                htmlFor="email"
                error={errors.email?.message}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@bix.com"
                  hasError={!!errors.email}
                  {...register("email")}
                />
              </Field>

              <Field
                label="Password"
                htmlFor="password"
                error={errors.password?.message}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  hasError={!!errors.password}
                  {...register("password")}
                />
              </Field>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </Form>

            <DemoCredentials>
              <span>Demo Credentials</span>

              <p>
                <strong>Email:</strong> admin@bix.com
              </p>

              <p>
                <strong>Password:</strong> 123456
              </p>
            </DemoCredentials>
          </Card>
        </LoginCard>
      </LoginSection>
    </Container>
  );
}
