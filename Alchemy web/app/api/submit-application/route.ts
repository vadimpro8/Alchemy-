import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body ?? {};

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все поля' },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await prisma.formSubmission.create({
      data: {
        name: String(name),
        phone: String(phone),
        status: 'new',
      },
    });

    // Send to Telegram
    const telegramMessage = `🎪 *Новая заявка на экспедицию ALCHEMY: KYRGYZSTAN*\n\n👤 *Имя:* ${name}\n📞 *Телефон:* ${phone}\n🕐 *Время:* ${new Date()?.toLocaleString?.('ru-RU', { timeZone: 'Asia/Bangkok' }) ?? ''}`;

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN ?? ''}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID ?? '@Alchemy_method',
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (!telegramResponse.ok) {
        console.error('Telegram API error:', await telegramResponse.text());
      }
    } catch (telegramError) {
      console.error('Error sending to Telegram:', telegramError);
      // Continue even if Telegram fails - data is saved in DB
    }

    return NextResponse.json(
      { success: true, id: submission?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка. Попробуйте ещё раз.' },
      { status: 500 }
    );
  }
}
