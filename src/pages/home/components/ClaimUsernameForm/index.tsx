import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormAnotation } from "./styles";
import { useRouter } from 'next/router'

const ClaimUsernameFormSchema = z.object({
  username: z.string() //validações e tranformação de dados
  .min(3, {message: 'Usuário precisa ter no mínimo 3 letras'})
  .regex(/^([a-z\\_]+)$/i, {message: 'Usuário deve conter apenas letras e underlines.'})
  .transform(username => username.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {

  const {register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema)
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as='form' onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>Reservar <ArrowRight /></Button>
      </Form>

      <FormAnotation>
        <Text size='sm'>
          {errors.username ? errors.username.message : 'Digite o usuário desejado.'}
        </Text>
      </FormAnotation>
    </>
  )
}