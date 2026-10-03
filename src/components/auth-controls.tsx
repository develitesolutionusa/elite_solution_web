"use client";

import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export function AuthControls() {
  return (
    <div className="auth-controls">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button type="button" className="auth-signin">
            Sign in
          </button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "auth-avatar",
            },
          }}
        />
      </Show>
    </div>
  );
}
