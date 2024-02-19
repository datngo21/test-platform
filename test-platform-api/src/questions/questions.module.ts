import { Module } from "@nestjs/common";
import { QuestionsService } from "./question.service";
import { QuestionsController } from "./questions.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [PrismaModule],
})
export class QuestionsModule {}
