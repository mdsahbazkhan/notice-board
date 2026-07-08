import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    if (req.method === "GET") {
      const notice = await prisma.notice.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      if (!notice) {
        return res.status(404).json({
          message: "Notice not found",
        });
      }

      return res.status(200).json(notice);
    }
    if (req.method === "PUT") {
      const { title, body, category, priority, publishDate, image } = req.body;
      if (!title || !body) {
        return res.status(400).json({
          message: "Title and Body are required",
        });
      }
      if (!publishDate || isNaN(new Date(publishDate).getTime())) {
        return res.status(400).json({
          message: "Valid publish date is required",
        });
      }
      const notice = await prisma.notice.update({
        where: {
          id: parseInt(id),
        },
        data: {
          title,
          body,
          category,
          priority,
          publishDate: new Date(publishDate),
          image,
        },
      });
      return res.status(200).json(notice);
    }
    if (req.method === "DELETE") {
      await prisma.notice.delete({
        where: {
          id: parseInt(id),
        },
      });
      return res.status(200).json({
        message: "Notice deleted successfully",
      });
    }
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
