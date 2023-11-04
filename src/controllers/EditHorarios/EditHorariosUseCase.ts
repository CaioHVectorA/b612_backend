import { Tempos } from "@prisma/client";
import formatFromSheet, { getAllFromSheet } from "../../utils/formatFromSheet";
import { prisma } from "../../utils/prisma.client";
import { info } from "veclog";
import { cache } from "../../config/cache";
export default class EditHorariosUseCase {
  async execute({ data }: { data: string }): Promise<Tempos> {
    info('Requisição no banco de dados: Edit Horarios!',true)
    const found = await prisma.tempos.findFirst();
    if (found) {
      // const sheet =  
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
    for(let x = 1;x !== 4;x++) for (let y = 1; y !== 5; y++) {
      console.log(`${x}00${y}`)
      cache.del(`${x}00${y}`)
    } 
    return created;
  }
}
