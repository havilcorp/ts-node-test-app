import { model, Schema } from "mongoose";
import { ModelDefinition, ModelDocument } from "./types";

// Интерфейс модели
export interface IUser {
  login: string;
  balance: number;
  birthday: Date;
}

// Определение схемы модели
const definition: ModelDefinition<IUser> = {
  login: { type: String, unique: true, required: true }, // Уникальное, обязательное, строковое поле
  balance: { type: Number, default: 0, min: 0 },
  birthday: { type: Date, default: new Date() },
};

// Схема модели
const UserSchema = new Schema(definition);
export const UserModel = model<ModelDocument<IUser>>("User", UserSchema);
