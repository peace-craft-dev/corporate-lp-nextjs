"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact, FormState } from "@/app/actions";

const initialState: FormState = { success: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-peace-500 hover:bg-peace-900 disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition-colors"
    >
      {pending ? "送信中..." : "送信する"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-peace-900 mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peace-500 focus:ring-2 focus:ring-peace-500/20 outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-peace-900 mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peace-500 focus:ring-2 focus:ring-peace-500/20 outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-peace-900 mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peace-500 focus:ring-2 focus:ring-peace-500/20 outline-none"
        />
      </div>
      <SubmitButton />
      {state.message && (
        <p
          className={`text-sm mt-2 ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
