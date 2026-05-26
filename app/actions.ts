"use server";

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "全ての項目を入力してください" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "メールアドレスの形式が不正です" };
  }

  // 実運用時は SendGrid / Resend / DB保存 等に連携
  // ここではログ出力のみ
  console.log("Contact form submission:", { name, email, message });

  return {
    success: true,
    message: "お問い合わせいただきありがとうございます。担当者よりご返信いたします。",
  };
}
