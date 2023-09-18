"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/platform/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;

// 'use client'
// import Link from "next/link";
// import styles from "./page.module.css";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Register() {
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const name = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       });
//       res.status === 201 && router.push("/platform/login?success=Account has been created");
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     }
//   };
//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nombre de usuario"
//           className={styles.input}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Tu correo"
//           className={styles.input}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Tu contraseña"
//           className={styles.input}
//           required
//         />
//         <button className={styles.button}>Registrarme</button>
//       </form>
//       {error && "Algo salio mal"}
//       <Link href="/platform/login">Ya tengo mi cuenta</Link>
//     </div>
//   );
// }
