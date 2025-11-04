export async function submitLead(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (!email) {
    throw new Error("メールアドレスを入力してください。");
  }
  return { ok: true };
}
