import { db } from "../../prisma/db";
import { IUser, IUserBase } from "../interfaces/IUser";

export class UserRepository {
  static async findAll(params: Partial<IUserBase>) {
    return await db.user.findMany({
      where: {
        name: {
          contains: params.name,
          mode: "insensitive",
        },
        email: {
          contains: params.email,
          mode: "insensitive",
        },
        role: params.role,
        deletedAt: null,
      },
    });
  }

  static async findById(id: string) {
    return await db.user.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });
  }

  static async findByEmail(email: string) {
    return await db.user.findUnique({
      where: {
        email,
      },
    });
  }

  static async create(data: IUserBase) {
    return await db.user.create({
      data,
    });
  }

  static async update(data: IUser) {
    return await db.user.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  static async delete(id: string) {
    return await db.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
