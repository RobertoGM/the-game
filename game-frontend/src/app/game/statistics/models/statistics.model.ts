import { MoveTypeEnum } from "../../board/models/move.model";

export interface MoveStatsDto {
    move: MoveTypeEnum;
    winPercent: number;
}