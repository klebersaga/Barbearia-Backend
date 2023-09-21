import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty({required: true})
    nome: string

    @ApiProperty({required: true})
    senha: string

    @ApiProperty({required: true})
    email: string

    @ApiProperty()
    endereco: string
}

