import { FuncaoTimeDto } from "./FuncaoTimeDto";
import { TimeDto } from "./TimeDto";
import { UsuarioDto } from "./UsuarioDto";

export interface UsuarioTimeDto {
    idUsuarioTime: Number;
    dataEntrada: Date;
    cargo: String;
    usuario: UsuarioDto;
    time: TimeDto;
    funcaoTime: FuncaoTimeDto;
}