import { UsuarioDto } from "src/model/UsuarioDto";

export class UsuarioLogado {

    private usuario: UsuarioDto;

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
