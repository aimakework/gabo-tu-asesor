import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Base de datos no configurada" },
      { status: 503 }
    );
  }
  try {
    const body = await request.json();
    const { answers } = body;

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Se requieren las respuestas del formulario" },
        { status: 400 }
      );
    }

    const email = (answers as Record<string, unknown>).email as string | undefined;

    const submission = await prisma.formSubmission.create({
      data: {
        answers: answers as object,
        email: email ?? null,
      },
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Error guardando formulario:", error);
    return NextResponse.json(
      { error: "Error al guardar el formulario. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
