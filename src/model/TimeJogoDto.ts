import { TimeDto } from "./TimeDto";

export interface TimeJogoDto {
    idTimeJogo: Number;
    local: String;
    pontuacaoTime1: Number;
    pontuacaoTime2: Number;
    dataJogo: Date;
    time1: TimeDto;
    time2: TimeDto;
    titulo: String;
}