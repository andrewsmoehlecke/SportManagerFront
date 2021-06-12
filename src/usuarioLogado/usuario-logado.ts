import { UsuarioDto } from "src/model/UsuarioDto";

export class UsuarioLogado {

    private usuario: UsuarioDto;

    public getTestUser() {
        this.usuario.idUsuario = 5;
        this.usuario.username = "a";
        this.usuario.email = "a";
        this.usuario.senha = "a";
        this.usuario.dataCriacao = new Date("2021-06-12 09:36:15");
        this.usuario.fotoPerfil = null;
    }

    public saveUsuarioLogado(u: UsuarioDto): void {
        this.usuario = u;
    }

    public getUsuarioLogado(): UsuarioDto {
        return this.usuario;
    }

    public logout(): void {
        this.usuario = null;
    }
}
