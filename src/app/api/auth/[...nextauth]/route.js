import connect from "@/app/utils/db";
import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {

                await connect();

                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        // check password
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                        if(isPasswordCorrect){
                            return user
                        }else{
                            throw new Error("Algo incorrecto")
                        }

                    } else {
                        throw new Error("No se encuentra usuario")
                    }
                } catch (err) {
                    throw new Error(err);
                }
            }
        })
    ],
    pages:{
        error:"/platform/login"
    }
})

export { handler as GET, handler as POST };

//authjs.dev/getting-started/oauth-tutorial?frameworks=next#2-configuring-oauth-provider