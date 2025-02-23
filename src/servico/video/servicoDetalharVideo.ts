import prismaClient from "../../prisma";

class ServicoDetalharVideo {
  async executar(id_video: number) {
    const video = await prismaClient.video.findUnique({
      where: { id_video },
    });

    if (!video) {
      throw new Error(`Vídeo com ID ${id_video} não encontrado.`);
    }

    // Monta a URL completa da capa
    const baseUrl = process.env.BASE_URL || "http://localhost:3335"; 
    video.capa = video.capa ? `${baseUrl}/media/img_video/${video.capa}` : null;
    console.log(video.capa)
    return video;
  }
}

export { ServicoDetalharVideo };
