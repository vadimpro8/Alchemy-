import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function POST(request: any) {

  try {
    const body = await request.json();
    const { name, phone } = body ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все поля' },
        { status: 400 }
      );
    }

    const submission = await prisma.formSubmission.create({
      data: {
        name: String(name),
        phone: String(phone),
        status: 'new',
      },
    });

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Произошла ошибка. Попробуйте ещё раз.' },
      { status: 500 }
    );
  }
}
