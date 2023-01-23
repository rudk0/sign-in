import React, { useCallback, useState } from "react";
import cn from "classnames";

import Input from "@/components/input";
import { Button } from "@/components/button";
import Checkbox from "@/components/checkbox";
import { Link } from "@/components/link";

import styles from "./sign-in.module.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(false);

  const handleCheckboxPress = useCallback(() => {
    setIsRememberMe((checked) => !checked);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form
          onSubmit={submit}
          className={styles.form}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>
              {/* eslint-disable-next-line no-irregular-whitespace */}
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className={styles.field}>
            <Input
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div className={styles.field}>
            <Input
              id="password"
              label="Password"
              value={password}
              type="password"
              onChange={setPassword}
              required
            />
          </div>
          <div className={cn(styles.field, styles.field_remember)}>
            <Checkbox
              id="remember"
              label="Remember for 30 days"
              checked={isRememberMe}
              onChange={handleCheckboxPress}
            />
            <Link href="/">Forgot password</Link>
          </div>
          <div className={cn(styles.field, styles.field_button)}>
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <div className={styles.circle} />
        <div className={styles.glass} />
      </div>
    </div>
  );
}

export default SignIn;
