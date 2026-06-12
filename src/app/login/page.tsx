"use client";

import { useRouter } from "next/navigation";
import { login } from "@/actions/auth/login";
import { toast } from "sonner";
export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const result = await login({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success("Login realizado com sucesso");

    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <form action={handleSubmit}>
      <input name="email" type="email" />

      <input name="password" type="password" />

      <button type="submit">Entrar</button>
    </form>
  );
}
