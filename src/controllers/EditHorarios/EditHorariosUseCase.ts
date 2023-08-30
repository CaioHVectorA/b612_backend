import { Tempos } from "@prisma/client";
import formatFromSheet, { getAllFromSheet } from "../../utils/formatFromSheet";
import { prisma } from "../../utils/prisma.client";

export default class EditHorariosUseCase {
  async execute({ data }: { data: string }): Promise<Tempos> {
    let arr = [];
    console.log(data);
    //const response = getAllFromSheet(JSON.parse(data));
    const found = await prisma.tempos.findFirst();
    if (found) {
      const edited = await prisma.tempos.update({
        where: { id: found.id },
        data: {
          value: JSON.stringify(data),
        },
      });
      return edited;
    }
    const created = await prisma.tempos.create({
      data: {
        value: JSON.stringify(data),
      },
    });
    return created;
  }
}
